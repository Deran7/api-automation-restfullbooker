import BaseAPI from "$pages/base.api.js";

const pingApi = {
    healthCheck : () => BaseAPI.get('/ping')
}

export default pingApi;