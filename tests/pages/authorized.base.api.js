import dotenv from 'dotenv';
import axios from 'axios';
import authApi from "$pages/auth.api.js";
import { VALID_AUTH } from "$data/auth.data.js";

dotenv.config();

const generateToken = await authApi.createToken(VALID_AUTH)

const AuthorizeAPI = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        "content-type": "application/json",
        "accept": "application/json",
        "Cookie":`token=${generateToken.data.token}`,
        "Authorization": `Basic ${generateToken.data.token}`
    },
    validateStatus: function () {
        return true;
    }
});

export default AuthorizeAPI;