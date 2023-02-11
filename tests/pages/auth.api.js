import BaseAPI from "$pages/base.api.js";

const authApi = {
    createToken : (data) => BaseAPI.post('/auth', data)
}

export default authApi;