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
  },

  async update(req, res) {
    const { body, params } = req;

    try {
      const product = await Frase.findByIdAndUpdate(params.id, body, { new: true });

      if(product === null) {
        res.status(404).send({ message: 'Frase não encontrada para o id informado'});
      } else {
        res.json(product);
      }
    } catch(e) {
      res.status(400).send({ message: e });
    }
  },

  async delete(req, res) {
    await Frase.remove({ _id: req.params.id });

    return res.json({});
  }
};
