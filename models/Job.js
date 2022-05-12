const mongoose = require('mongoose')


const JobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, 'Please Provide a Company Name'],
    maxlength: 50
  },
  position: {
    type: String,
    required: [true, 'Please Provide a Position'],
    maxlength: 50,
  },
  status: {
    type: String,
    enum: ['interview', 'declined', 'pending'],
    default: 'pending'
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please provide a User']
  }
}, { timestamps: true })

module.exports = mongoose.model('Job', JobSchema)