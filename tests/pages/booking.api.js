import BaseAPI from "$pages/base.api.js";
import AuthorizedAPI from "$pages/authorized.base.api.js";

const bookingApi = {
    createBooking : (data) => BaseAPI.post ('/booking', data),
    updateBooking : (id, payload) => AuthorizedAPI.put(`/booking/${id}`, payload),
    getBookingId : (id) => BaseAPI.get (`/booking/${id}`),
    getBooking : () => BaseAPI.get ('/booking/'),
    partialUpdateBooking : (id, payload) => AuthorizedAPI.patch(`/booking/${id}`, payload),
    deleteBooking : (id) => AuthorizedAPI.delete(`/booking/${id}`)
}

export default bookingApi;