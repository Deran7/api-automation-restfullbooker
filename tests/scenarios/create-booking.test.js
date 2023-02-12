import chai, { assert, expect } from "chai";
import bookingApi from "$pages/booking.api.js";
import * as data from "$data/booking.data.js";
import jsonSchema from "chai-json-schema";
import * as schema from "$schema/create-booking.schema.js";


chai.use(jsonSchema)

describe ('Create new booking positif case',() => {
    it('Successfull Create New Booking', async () => {
        const response = await bookingApi.createBooking(data.VALID_CREATE_BOOKING)

        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALID_CREATE_BOOKING_RESPONSE_SCHEMA)
    
 
    });
})

describe ('Create new booking negatif case',() => {

    it('Create new booking without firstname', async () => {
        const response = await bookingApi.createBooking(data.INVALID_CREATE_BOOKING_WITHOUT_FIRSNAME)

        assert.equal(response.status, 500)
        expect(response.data).to.be.jsonSchema(schema.INVALID_CREATE_BOOKING_WITHOUT_FIRSNAME_RESPONSE_SCHEMA)
    })

    it('Create new booking without lastname', async () => {
        const response = await bookingApi.createBooking(data.INVALID_CREATE_BOOKING_WITHOUT_LASTNAME)

        assert.equal(response.status, 500)
        expect(response.data).to.be.jsonSchema(schema.INVALID_CREATE_BOOKING_WITHOUT_LASTNAME_RESPONSE_SCHEMA)
    })

    it('Create new booking without firstname & lastname', async () => {
        const response = await bookingApi.createBooking(data.INVALID_CREATE_BOOKING_WITHOUT_FIRSTNAME_AND_LASTNAME)

        assert.equal(response.status, 500)
        expect(response.data).to.be.jsonSchema(schema.INVALID_CREATE_BOOKING_WITHOUT_FIRSTNAME_AND_LASTNAME_RESPONSE_SCHEMA)
    })
})