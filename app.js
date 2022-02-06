const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
  console.log('-------------------')
  console.log('Banco de dados conectado');
  console.log('-------------------')
});

const app = express();

// middlewares globais

app.use(express.json());
app.use(helmet());
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.json({ message: 'Olá Dev'});
});

app.listen(8800, () => {
  console.log('-------------------')
  console.log('Backend Iniciado 🔥');
  console.log('-------------------')
});

