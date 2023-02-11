import chai, { assert } from "chai";
import bookingAPI from "$pages/booking.api.js";

describe ( 'Get list booking by id positif case',() => {
    it('Succesfull get list booking by id registed', async () => {
        const response = await bookingAPI.getBookingId(3)

        assert.equal(response.status, 200)
    
    });
})

describe ( 'Get list booking by id negatif case',() => {

    it('Get list booking by id not registed', async () => {
        const response = await bookingAPI.getBookingId(98298)

        assert.equal(response.status, 404)
        assert.equal(response.data, "Not Found")
    
    });

    it('Get list booking by id string', async () => {
        const response = await bookingAPI.getBookingId(String)

        assert.equal(response.status, 404)
        assert.equal(response.data, "Not Found")
    
    });
})

