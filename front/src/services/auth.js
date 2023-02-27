import { v4 as uuidv4 } from 'uuid';

const saveToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}

exports.authenticate = async (req, res) => {
    // mock token
    const token = uuidv4();
    // set token in session
    saveToken(token);
}


// export setToken;

module.exports = {
    saveToken,
    getToken
}