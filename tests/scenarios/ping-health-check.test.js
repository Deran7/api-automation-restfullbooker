import { assert } from "chai";
import pingApi from "$pages/ping.api.js";

describe('Ping health check',() => {

    it('Should return status 201 created', async () => {
        const response = await pingApi.healthCheck()

        assert.equal(response.status, 201)
        assert.equal(response.data, "Created")
    });
})