import chai, { assert, expect } from "chai";
import bookingAPI from "$pages/booking.api.js";
import { getParams } from "$helpers/lib-api.js";

describe ( 'Get booking positif case',() => {
    it('Succesfull get list booking', async () => {
        const response = await bookingAPI.getBooking()
        
        assert.equal(response.status, 200)
    });
    
}),

describe ( 'Get booking negatif case',() => {
    it('Get list booking by firstname not registed', async () => {
        const response = await bookingAPI.getBooking()
        
        assert.equal(response.status, 200)
    });
})