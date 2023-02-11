import chai, { assert } from "chai";
import bookingAPI from "$pages/booking.api.js";

describe ( 'Get booking by id positif case',() => {
    it('Succesfull get booking by id registed', async () => {
        const response = await bookingAPI.getBookingId(3)

        assert.equal(response.status, 200)
    
    });
})

describe ( 'Get booking by id negatif case',() => {

    it('Get booking by id not registed', async () => {
        const response = await bookingAPI.getBookingId(10)

        assert.equal(response.status, 200)
    
    });
}) 