import chai, { assert, expect } from "chai";
import bookingApi from "$pages/booking.api.js";
import jsonSchema from "chai-json-schema";
import * as schema from "$schema/partial-update-booking.schema.js";
import * as data from "$data/booking.data.js";

chai.use(jsonSchema)

describe('Partial update booking positif case', () => {

    it('Should success partial update booking data with valid booking id', async () => {
        const response = await bookingApi.partialUpdateBooking(3, data.PARTIAL_UPDATE_BOOKING)

        assert.equal(response.status, 200)
        expect(response.data).to.be.jsonSchema(schema.VALID_PARTIAL_UPDATE_BOOKING_RESPONSE_SCHEMA)
    })
})

describe('Partial update booking negatif case', () => {

    it('Should failed partial update booking data with invalid booking id', async () => {
        const response = await bookingApi.partialUpdateBooking(808080, data.PARTIAL_UPDATE_BOOKING)

        assert.equal(response.status, 405)
        assert.equal(response.data, "Method Not Allowed")

    })

})