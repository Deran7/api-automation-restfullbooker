import chai, { assert, expect } from "chai";
import authApi from "$pages/auth.api.js";
import * as data from "$data/auth.data.js";
import jsonSchema from "chai-json-schema";
import * as schema from "$schema/create-token.schema.js"

chai.use(jsonSchema)

describe('Create token positif case', () => {

    it('Succesfull create token with data username & password registed', async () => {
        const response = await authApi.createToken(data.VALID_AUTH)

        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALID_AUTH_RESPONSE_SCHEMA)
    });
})

describe('Create token negatif case', () => {

    it('Create token with username registed & password not registed', async () => {
        const response = await authApi.createToken(data.INVALID_AUTH_PASSWORD_NOT_REGISTED)

        assert.equal(response.status, 200)
        assert.equal(response.data.reason, "Bad credentials")
        expect(response.data).to.be.jsonSchema(schema.INVALID_AUTH_PASSWORD_NOT_REGISTED_RESPONSE_SCHEMA)
    });
    
    it('Create token with username not registed & password not registed ', async () => {
        const response = await authApi.createToken(data.INVALID_AUTH_USERNAME_NOT_REGISTED)

        assert.equal(response.status, 200)
        assert.equal(response.data.reason, "Bad credentials")
        expect(response.data).to.be.jsonSchema(schema.INVALID_AUTH_USERNAME_NOT_REGISTED_RESPONSE_SCHEMA)

});

it('Create token with username empty & password registed', async () => {
    const response = await authApi.createToken(data.INVALID_AUTH_USERNAME_EMPTY_AND_PASSWORD_REGISTED)

        assert.equal(response.status, 200)
        assert.equal(response.data.reason, "Bad credentials")
        expect(response.data).to.be.jsonSchema(schema.INVALID_AUTH_USERNAME_EMPTY_AND_PASSWORD_REGISTED_RESPONSE_SCHEMA)

});

it('Create token with username empty & password not registed', async () => {
    const response = await authApi.createToken(data.INVALID_AUTH_USERNAME_EMPTY_AND_PASSWORD_NOT_REGISTED)

    assert.equal(response.status, 200)
    assert.equal(response.data.reason, "Bad credentials")
    expect(response.data).to.be.jsonSchema(schema.INVALID_AUTH_USERNAME_EMPTY_AND_PASSWORD_NOT_REGISTED_RESPONSE_SCHEMA)


})

it('Create token with username registed & password empty', async () => {
    const response = await authApi.createToken(data.INVALID_AUTH_USERNAME_REGISTED_AND_PASSWORD_EMPTY)

        assert.equal(response.status, 200)
        assert.equal(response.data.reason, "Bad credentials")
        expect(response.data).to.be.jsonSchema(schema.INVALID_AUTH_USERNAME_REGISTED_AND_PASSWORD_EMPTY_RESPONSE_SCHEMA)

})

it('Cretae token with username not registed & password empty', async () => {
    const response = await authApi.createToken(data.INVALID_AUTH_USERNAME_NOT_REGISTED_AND_PASSWORD_EMPTY)

    assert.equal(response.status, 200)
    assert.equal(response.data.reason, "Bad credentials")
    expect(response.data).to.be.jsonSchema(schema.INVALID_AUTH_USERNAME_NOT_REGISTED_AND_PASSWORD_EMPTY_RESPONSE_SCHEMA)

})

it('Create token with username & password empty', async () => {
    const response = await authApi.createToken(data.INVALID_AUTH_USERNAME_AND_PASSWORD_EMPTY)

        assert.equal(response.status, 200)
        assert.equal(response.data.reason, "Bad credentials")
        expect(response.data).to.be.jsonSchema(schema.INVALID_AUTH_USERNAME_AND_PASSWORD_EMPTY_RESPONSE_SCHEMA)

})
})