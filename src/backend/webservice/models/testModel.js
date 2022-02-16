const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TestSchema = new mongoose.Schema({
  data: { type: String, required: true, unique: true },
  data2: { type: Boolean}
}, {
  versionKey: false // You should be aware of the outcome after set to false
})


exports.Test = mongoose.model('tests', TestSchema);
