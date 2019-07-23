const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://dede:dede@cluster0-odbya.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.use(require('./routes'));

app.listen(5000);