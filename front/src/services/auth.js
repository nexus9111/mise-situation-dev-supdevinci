import { v4 as uuidv4 } from 'uuid';

const USE_MOCK = true;

const URL = 'http://localhost:3000';
const REGISTER_URL = `${URL}/users/register`;
const LOGIN_URL = `${URL}/users/login`;

const saveToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}

exports.login = async (email, password) => {
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


exports.register = async (email, password, username) => {
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


// export setToken;

module.exports = {
    saveToken,
    getToken
}