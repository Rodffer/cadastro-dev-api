const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    max: 50
  },
  lastName: {
    type: String,
    require: true,
    max: 50
  },
  email: {
    type: String,
    require: true,
    max: 50,
    unique: true
  },
  role: {
    type: String,
    require: true,
    enum: ['frontend', 'backend', 'fullstack'],
    require: true
  },
  level: {
    type: String,
    require: true,
    enum: ['junior', 'middle', 'senior'],
    require: true
  },
  stacks: {
    type: Array,
    default: [],
  },
  description: {
    type: String
  }
}, { timestamps: true});

module.exports = mongoose.model('Dev', DevSchema);