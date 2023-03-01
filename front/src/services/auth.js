import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

const USE_MOCK = true;

const URL = 'http://localhost:3001';
const REGISTER_URL = `${URL}/users/register`;
const LOGIN_URL = `${URL}/users/login`;
const PROFILE_URL = `${URL}/users/profile`;

const mockedProfileResults = {
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

const isLogin = () => {
    const token = sessionStorage.getItem('token');
    return token ? true : false;
}

const saveToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}

const logout = () => {
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
        return mockedProfileResults;
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

// export setToken;
const funcs = { getToken, login, register, profile, isLogin, logout }
export default funcs;