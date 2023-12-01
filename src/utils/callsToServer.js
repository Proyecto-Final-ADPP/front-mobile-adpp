import { callAPI } from './fetch';

const endpoint = 'https://dbd4-190-226-159-183.ngrok.io/api';

export const loginCall = async (username, password) => {
    const data = { username, password }
    const response = await callAPI(`${endpoint}/auth/login`, data, 'post');
    
    if (response.user) {
        return response;
    } else {
        return false;
    }
}

export const rolCall = async () => {
    //const data = {rol}
    const response = await callAPI(`${endpoint}/role`, 'get');
    
    if (response) {
        return response;
    } else {
        return false;
    }
}

export const registerCall = async (data) => {
    const response = await callAPI(`${endpoint}/users`, data, 'post');

    if (response.dni) {
        return response;
    } else {
        return false;
    }
}

