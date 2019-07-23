const Frase = require('../models/Frase');

module.exports = {
  async index(req, res) {
    const frases = await Frase.find().sort('-createdAt');

    return res.json(frases);
  },

  async store(req, res) {
    const { texto, significado } = req.body;
    const frase = await Frase.create({ texto, significado });

    return res.json(frase);
  }
};