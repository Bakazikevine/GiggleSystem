const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required:[true,'Email is required'],
    unique:true,
    match: [/^\S+@\S+\.\S+$/, 'Email is invalid']
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true
  },
  householdSize: {
    type: Number,
    required: true
  },
  idCard: {
    type: String,
    required: true
  },
  AdditionalInformation: {
    type: [String],
    required:true
  }
}, { timestamps: true }); 

module.exports = mongoose.model('Booking', BookingSchema);