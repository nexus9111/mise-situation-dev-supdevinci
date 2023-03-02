const USE_MOCK = false;

const URL = 'http://localhost:3001';
const SEARCH_URL = `${URL}/companies`;

const mockedSearchResults = {
	"success": true,
	"data": {
		"message": "Companies fetched",
		"companies": [
			{
				"companyIdentifier": "842075988_HIVENTIVE",
				"siren": "842075988",
				"name": "Hiventive",
				"establishmentCount": 1,
				"category": "PME",
				"creationDate": "2018-08-13",
				"activitySection": "Information et communication",
				"rawActivitySection": "J",
				"siegeAddress": "20 RUE DU RELAIS 33600 PESSAC",
				"siegeCoord": "44.794884,-0.607271",
				"siegeDepartement": "33",
				"siegePostalCode": "33600",
				"owners": [
					{
						"nom": "DELBERGUE",
						"prenoms": "guillaume",
						"annee_de_naissance": "1991",
						"qualite": "Président",
						"type_dirigeant": "personne physique"
					}
				],
				"establishments": [
					{
						"activite_principale": "63.11Z",
						"adresse": "20 RUE DU RELAIS 33600 PESSAC",
						"commune": "33318",
						"est_siege": true,
						"etat_administratif": "A",
						"geo_id": "33318_2907_00020",
						"latitude": "44.794884",
						"liste_enseignes": [
							"HIVENTIVE"
						],
						"liste_finess": null,
						"liste_idcc": [
							"1486"
						],
						"liste_rge": null,
						"liste_uai": null,
						"longitude": "-0.607271",
						"nom_commercial": "HIVENTIVE",
						"siret": "84207598800019"
					}
				],
				"comments": {
					"workerComments": [
						{
							"anonymous": true,
							"author": "Anonyme",
							"authorId": "7bda9ddc-ee59-4b20-92c0-901961b937c3",
							"comment": "ceci esty un commentaire",
							"companyIdentifier": "842075988_HIVENTIVE",
							"id": "332562c4-4e87-4383-b67c-8c98a0e490bb"
						},
						{
							"anonymous": true,
							"author": "hackonix",
							"authorId": "7bda9ddc-ee59-4b20-92c0-901961b937c3",
							"comment": "ceci esty un commentaire",
							"companyIdentifier": "842075988_HIVENTIVE",
							"id": "0a52ec67-b64e-46a9-af83-cfdd44f79fd0"
						}
					],
					"clientComments": []
				}
			},
            {
				"companyIdentifier": "84sd2075988_HIVENTIVE",
				"siren": "842075988",
				"name": "Youtube",
				"establishmentCount": 1,
				"category": "PME",
				"creationDate": "2018-08-13",
				"activitySection": "Information et communication",
				"rawActivitySection": "J",
				"siegeAddress": "20 RUE DU RELAIS 33600 PESSAC",
				"siegeCoord": "44.794884,-0.607271",
				"siegeDepartement": "33",
				"siegePostalCode": "33600",
				"owners": [
					{
						"nom": "DELBERGUE",
						"prenoms": "guillaume",
						"annee_de_naissance": "1991",
						"qualite": "Président",
						"type_dirigeant": "personne physique"
					}
				],
				"establishments": [
					{
						"activite_principale": "63.11Z",
						"adresse": "20 RUE DU RELAIS 33600 PESSAC",
						"commune": "33318",
						"est_siege": true,
						"etat_administratif": "A",
						"geo_id": "33318_2907_00020",
						"latitude": "44.794884",
						"liste_enseignes": [
							"HIVENTIVE"
						],
						"liste_finess": null,
						"liste_idcc": [
							"1486"
						],
						"liste_rge": null,
						"liste_uai": null,
						"longitude": "-0.607271",
						"nom_commercial": "HIVENTIVE",
						"siret": "84207598800019"
					}
				],
				"comments": {
					"workerComments": [
						{
							"anonymous": true,
							"author": "Anonyme",
							"authorId": "7bda9ddc-ee59-4b20-92c0-901961b937c3",
							"comment": "le patron est le fils d'hitler",
							"companyIdentifier": "842075988_HIVENTIVE",
							"id": "332562c4-4e87-4383-b67c-8c98a0e490bb"
						},
						{
							"anonymous": true,
							"author": "hackonix",
							"authorId": "7bda9ddc-ee59-4b20-92c0-901961b937c3",
							"comment": "le patron est le fils d'hitler",
							"companyIdentifier": "842075988_HIVENTIVE",
							"id": "0a52ec67-b64e-46a9-af83-cfdd44f79fd0"
						}
					],
					"clientComments": []
				}
			},
            {
				"companyIdentifier": "8420fd75988_HIVENTIVE",
				"siren": "842075988",
				"name": "Sonerezh",
				"establishmentCount": 1,
				"category": "PME",
				"creationDate": "2018-08-13",
				"activitySection": "Information et communication",
				"rawActivitySection": "J",
				"siegeAddress": "20 RUE DU RELAIS 33600 PESSAC",
				"siegeCoord": "44.794884,-0.607271",
				"siegeDepartement": "33",
				"siegePostalCode": "33600",
				"owners": [
					{
						"nom": "DELBERGUE",
						"prenoms": "guillaume",
						"annee_de_naissance": "1991",
						"qualite": "Président",
						"type_dirigeant": "personne physique"
					}
				],
				"establishments": [
					{
						"activite_principale": "63.11Z",
						"adresse": "20 RUE DU RELAIS 33600 PESSAC",
						"commune": "33318",
						"est_siege": true,
						"etat_administratif": "A",
						"geo_id": "33318_2907_00020",
						"latitude": "44.794884",
						"liste_enseignes": [
							"HIVENTIVE"
						],
						"liste_finess": null,
						"liste_idcc": [
							"1486"
						],
						"liste_rge": null,
						"liste_uai": null,
						"longitude": "-0.607271",
						"nom_commercial": "HIVENTIVE",
						"siret": "84207598800019"
					}
				],
				"comments": {
					"workerComments": [
						{
							"anonymous": true,
							"author": "Anonyme",
							"authorId": "7bda9ddc-ee59-4b20-92c0-901961b937c3",
							"comment": "le patron est le fils d'hitler",
							"companyIdentifier": "842075988_HIVENTIVE",
							"id": "332562c4-4e87-4383-b67c-8c98a0e490bb"
						},
						{
							"anonymous": true,
							"author": "hackonix",
							"authorId": "7bda9ddc-ee59-4b20-92c0-901961b937c3",
							"comment": "le patron est le fils d'hitler",
							"companyIdentifier": "842075988_HIVENTIVE",
							"id": "0a52ec67-b64e-46a9-af83-cfdd44f79fd0"
						}
					],
					"clientComments": []
				}
			}
		],
		"total": 1,
		"page": 1,
		"perPage": 10,
		"totalPage": 1,
		"availableQueryParameters": [
			"queryString",
			"postalCode",
			"department",
			"principalActivitySection",
			"page",
			"limit"
		]
	}
}

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

const ACTIVITY_SECTIONS_CODES_ENUM = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U"];

const getActivitySections = () => {
    return ACTIVITY_SECTIONS_CODES_ENUM;
}

const getActivitySectionValue = (activitySectionCode) => {
    return `${activitySectionCode}: ${ACTIVITY_SECTIONS_ENUM[activitySectionCode]}`;
}

const searchCompanies = async (queryString, postalCode, department, principalActivitySection, page, limit) => {
	console.log(queryString);
	if (!queryString && !postalCode && !department && !principalActivitySection) {
		return {};
	}

    if (USE_MOCK) {
        return mockedSearchResults.data;
    }

    let urlSuffix = "?";
    if (queryString) {
        urlSuffix += `queryString=${queryString}&`;
    }

    if (postalCode) {
        urlSuffix += `postalCode=${postalCode}&`;
    }

    if (department) {
        urlSuffix += `department=${department}&`;
    }

    if (principalActivitySection) {
        urlSuffix += `principalActivitySection=${principalActivitySection}&`;
    }
	if (page.length > 0) {
    	urlSuffix += `page=${page}&`;
	}
	if (limit.length > 0) {
    	urlSuffix += `per_page=${limit}`;
	}

	console.log(`${SEARCH_URL}${urlSuffix}`);
    const response = await fetch(`${SEARCH_URL}${urlSuffix}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
	console.log(data.data.companies[0].owners);
    // verify status code
    if (data.success) {
        return data.data;
    }
    throw new Error(data.data.message);
}

// export setToken;
const funcs = { searchCompanies, getActivitySections, getActivitySectionValue }
export default funcs;