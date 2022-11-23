const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
  
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  }, 
   salary: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
