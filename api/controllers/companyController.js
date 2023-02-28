const axios = require("axios");

const Comment = require("../models/commentModels");

const responseUtils = require("../utils/apiResponseUtils");

const logger = require("../config/logger");
const errors = require("../config/errors");

const COMPANY_FETCHER_URL = "https://recherche-entreprises.api.gouv.fr/search";
const ACTIVITY_SECTIONS_ENUM = {
    "A": "Agriculture, sylviculture et pêche",
    "B": "Industries extractives",
    "C": "Industries manufacturières",
    "D": "Production et distribution d'électricité, de gaz, de vapeur et d'air conditionné",
    "E": "Production et distribution d'eau ; assainissement, gestion des déchets et dépollution",
    "F": "Construction",
    "G": "Commerce ; réparation d'automobiles et de motocycles",
    "H": "Transports et entreposage",
    "I": "Hébergement et restauration",
    "J": "Information et communication",
    "K": "Activités financières et d'assurance",
    "L": "Activités immobilières",
    "M": "Activités spécialisées, scientifiques et techniques",
    "N": "Activités de services administratifs et de soutien",
    "O": "Administration publique et défense ; sécurité sociale obligatoire",
    "P": "Enseignement",
    "Q": "Activités de santé humaine et d'action sociale",
    "R": "Activités artistiques, de loisirs et de spectacles",
    "S": "Autres activités de services",
    "T": "Activités des ménages en tant qu'employeurs ; activités indifférenciées des ménages en tant que producteurs de biens et services pour usage propre",
    "U": "Activités des organisations et organismes extraterritoriaux",
};

const generateCompanyIdentifier = (siren, name) => {
    // replace space by underscore
    let formattedName = name.replace(/ /g, "_");
    // remove all special characters
    formattedName = formattedName.replace(/[^\dA-Za-z]/g, "");

    return `${siren}_${formattedName}`;
};

const getCompanyNameFromIdentifier = (companyIdentifier) => {
    const splittedIdentifier = companyIdentifier.split("_");
    console.log(splittedIdentifier);
    if (splittedIdentifier.length < 2) {
        return null;
    }
    return splittedIdentifier[1];
};

const getCompanyInfos = async (req, {
    queryString,
    postalCode,
    department,
    principalActivitySection,
    page = 1,
    limit = 10,
}) => {
    let urlSuffix = "?";
    if (queryString) {
        urlSuffix += `q=${queryString}&`;
    }

    if (postalCode) {
        urlSuffix += `code_postal=${postalCode}&`;
    }

    if (department) {
        urlSuffix += `departement=${department}&`;
    }

    if (principalActivitySection) {
        if (!Object.keys(ACTIVITY_SECTIONS_ENUM).includes(principalActivitySection)) {
            responseUtils.errorResponse(req, errors.errors.FORBIDDEN, "Invalid principal activity section");
        }
        urlSuffix += `section_activite_principale=${principalActivitySection}&`;
    }

    urlSuffix += `page=${page}&`;
    urlSuffix += `per_page=${limit}`;
    try {
        const data = await axios.get(COMPANY_FETCHER_URL + urlSuffix);
        console.log(data.data);

        companiesDetails = [];
        for (const company of data.data.results) {
            const workerComments = await Comment.find({ companyIdentifier: generateCompanyIdentifier(company.siren, company.nom_complet), anonymous: true });
            const clientComments = await Comment.find({ companyIdentifier: generateCompanyIdentifier(company.siren, company.nom_complet), anonymous: false });
            companiesDetails.push({
                companyIdentifier: generateCompanyIdentifier(company.siren, company.nom_complet),
                siren: company.siren,
                name: company.nom_complet,
                establishmentCount: company.nombre_etablissements,
                category: company.categorie_entreprise,
                creationDate: company.date_creation,
                // activitySection: company.section_activite_principale,
                activitySection: ACTIVITY_SECTIONS_ENUM[company.section_activite_principale],
                rawActivitySection: company.section_activite_principale,
                siegeAddress: company.siege.adresse,
                siegeCoord: company.siege.coordonnees,
                siegeDepartement: company.siege.departement,
                siegePostalCode: company.siege.code_postal,
                owners: company.dirigeants,
                establishments: company.matching_etablissements,
                comments: {
                    workerComments: responseUtils.safeDatabaseArray(workerComments),
                    clientComments: responseUtils.safeDatabaseArray(clientComments),
                },
            });
        }

        return {
            companies: companiesDetails,
            total: data.data.total_results,
            page: data.data.page,
            perPage: data.data.per_page,
            totalPage: data.data.total_pages,
        };

    } catch (error) {
        logger.error(error);
        responseUtils.errorResponse(req, errors.errors.INTERNAL_SERVER_ERROR, "Error while fetching company data");
    }
};

exports.getCompanies = async (req, res, next) => {
    try {
        const { queryString, postalCode, department, principalActivitySection, page, limit } = req.query;

        if (!queryString && !postalCode && !department && !principalActivitySection) {
            responseUtils.errorResponse(req, errors.errors.FORBIDDEN,
                "Provide at least one query parameter, available parameters are: queryString, postalCode, department, principalActivitySection"
            );
        }

        const companies = await getCompanyInfos(req, {
            queryString,
            postalCode,
            department,
            principalActivitySection,
            page,
            limit,
        });
        return responseUtils.successResponse(res, req, 200, {
            message: "Companies fetched",
            companies: companies.companies,
            total: companies.total,
            page: companies.page,
            perPage: companies.perPage,
            totalPage: companies.totalPage,
            availableQueryParameters: ["queryString", "postalCode", "department", "principalActivitySection", "page", "limit"]
        });
    } catch (error) {
        next(error);
    }
};

exports.comment = async (req, res, next) => {
    try {
        const { companyIdentifier, comment, anonymous } = req.body;

        if (!companyIdentifier || !comment) {
            responseUtils.errorResponse(req, errors.errors.FORBIDDEN, "Missing id or comment");
        }

        if (comment.length > 500) {
            responseUtils.errorResponse(req, errors.errors.FORBIDDEN, "Comment too long");
        }

        let companyName = getCompanyNameFromIdentifier(companyIdentifier);
        if (!companyName) {
            responseUtils.errorResponse(req, errors.errors.FORBIDDEN, "Invalid company identifier");
        }

        const newComment = new Comment({
            anonymous: anonymous,
            authorId: req.connectedUser.id,
            author: anonymous ? "Anonyme" : req.connectedUser.username,
            comment: comment,
            company: companyName,
            companyIdentifier: companyIdentifier,
        });
        await newComment.save();

        return responseUtils.successResponse(res, req, 200, {
            message: "Comment added",
            comment: responseUtils.safeDatabaseData(newComment),
        });
    } catch (error) {
        next(error);
    }
};