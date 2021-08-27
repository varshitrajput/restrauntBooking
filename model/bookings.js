const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
    bookingId:{ type: String, required: true},
    tableId: { type: String, required: true },
    server:{ type: String, required: true},
    name: { type: String, required: true },
    email: { type: String, required: true },
    startTime: { type: Number, required: true },
    endTime: { type: Number},
    guests : { type: String, required: true}
   
}, { collection: 'bookings' }
)

const model = mongoose.model('BookingSchema', BookingSchema)

module.exports = model