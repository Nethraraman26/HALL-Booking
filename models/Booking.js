const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  hall: String,
  date: String,
  timeSlot: String,
  purpose: String
});

module.exports = mongoose.model('Booking', bookingSchema);
