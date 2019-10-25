const express = require('express');

const FrasesController = require('./controllers/Frases');

const routes = new express.Router();

routes.get('/frases', FrasesController.index);
routes.put('/frases/:id', FrasesController.update);
routes.post('/frases', FrasesController.store);
routes.delete('/frases/:id', FrasesController.delete);

module.exports = routes;
