const mongoose = require('mongoose');

const FraseSchema = new mongoose.Schema({
  texto: String,
  significado: String,
  autor: {
    type: String,
    default: "André"
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Frase', FraseSchema);