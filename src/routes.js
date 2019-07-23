const express = require('express');

const FrasesController = require('./controllers/Frases');

const routes = new express.Router();

routes.get('/frases', FrasesController.index);
routes.post('/frases', FrasesController.store);

module.exports = routes;