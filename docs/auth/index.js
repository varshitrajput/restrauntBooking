const registUser = require('./register-user');
const loginUser = require('./login-user'); 
const listUsers = require('./list-users');
const addReservation = require('../bookings/add-reservation');
const getReservations = require('../bookings/get-reservation');
const getAllReservations = require('../bookings/get-all-reservation');
const cancelBooking = require('../bookings/cancel-reservation');
const updateBooking = require('../bookings/update-reservation');

module.exports = {
    paths:{
        '/api/login':{
            ...loginUser
        },
        '/api/register':{
            ...registUser,
        },
        '/api/listUsers': {
            ...listUsers,
        },
        //for bookings
        '/api/addReservation': {
            ...addReservation,
        },
        '/api/getReservations': {
            ...getReservations,
        },
        '/api/getAllReservations': {
            ...getAllReservations,
        },
        '/api/cancelBooking': {
            ...cancelBooking,
        },
        '/api/updateBooking': {
            ...updateBooking,
        }
    }
}