import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

const USE_MOCK = true;

const URL = 'http://localhost:3000';
const REGISTER_URL = `${URL}/users/register`;
const LOGIN_URL = `${URL}/users/login`;
const PROFILE_URL = `${URL}/users/profile`;
const SEARCH_URL = `${URL}/companies`;

const mockedProdileResults = {
    "success": true,
    "data": {
        "message": "User profile",
        "user": {
            "email": "fataljc.joss@outlook.fr",
            "username": "hackonix",
            "id": "fe98e14c-b127-4e9c-af0a-eef66ee97f76"
        },
        "comments": [
            {
                "anonymous": false,
                "author": "hackonix",
                "authorId": "fe98e14c-b127-4e9c-af0a-eef66ee97f76",
                "comment": "le patron est pas cool",
                "company": "HIVENTIVE",
                "companyIdentifier": "842075988_HIVENTIVE",
                "id": "8029defa-e396-4ece-b8ff-e1cdcf39bae6"
            }
        ]
    }
}

const mockedSearchResults = {
    "success": true,
    "data": {
        "message": "Companies fetched",
        "companies": [
            {
                "companyIdentifier": "842075988_HIVENTIVE",
                "siren": "842075988",
                "name": "HIVENTIVE",
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

const saveToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}

const Logout = () => {
    console.log("Je suis une petite pute")
    sessionStorage.removeItem('token');
}

const login = async (email, password) => {
    // mock token
    if (USE_MOCK) {
        const token = uuidv4();
        // set token in session
        saveToken(token);
        return;
    }

    const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    const data = await response.json();
    // verify status code
    if (data.data.success) {
        // set token in session
        let token = data.data.token;
        saveToken(token);
        return;
    }
    throw new Error(data.data.message);
}


const register = async (email, password, username) => {
    // mock token
    if (USE_MOCK) {
        const token = uuidv4();
        // set token in session
        saveToken(token);
        return;
    }

    const response = await fetch(REGISTER_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
            username
        })
    });
    const data = await response.json();
    // verify status code
    if (data.data.success) {
        // set token in session
        let token = data.data.token;
        saveToken(token);
        return;
    }
    throw new Error(data.data.message);
}

const profile = async () => {
    // mock token
    if (USE_MOCK) {
        return mockedProdileResults;
    }

    const response = await fetch(PROFILE_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    });
    const data = await response.json();
    // verify status code
    if (data.data.success) {
        return data.data;
    }
    throw new Error(data.data.message);
}

const searchCompanies = async (queryString, postalCode, department, principalActivitySection, page, limit) => {
    if (USE_MOCK) {
        return mockedSearchResults;
    }

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
        urlSuffix += `section_activite_principale=${principalActivitySection}&`;
    }

    urlSuffix += `page=${page}&`;
    urlSuffix += `per_page=${limit}`;

    const response = await fetch(`${SEARCH_URL}${urlSuffix}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    // verify status code
    if (data.data.success) {
        return data.data;
    }
    throw new Error(data.data.message);
}



// export setToken;
const funcs = { getToken, login, register, searchCompanies, profile, Logout }
export default funcs;