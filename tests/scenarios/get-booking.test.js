import chai, { assert, expect } from "chai";
import bookingAPI from "$pages/booking.api.js";

describe ('Get list booking positif case',() => {
    it('Succesfull get list booking', async () => {
        const response = await bookingAPI.getBooking()
        
        assert.equal(response.status, 200)
    });
    
}),

describe ( 'Get list booking negatif case',() => {
    it('Get list booking by firstname not registed', async () => {
        const response = await bookingAPI.getBooking()
        
        assert.equal(response.status, 200)

    }),

    it('Get list booking by lastname not registed', async () => {
    const response = await bookingAPI.getBooking()
    
        assert.equal(response.status, 200)

    });

})