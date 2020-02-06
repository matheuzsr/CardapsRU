const express=require('express');
const CardapioController= require('./controllers/CardapioController');

const routes = express.Router();

routes.post('/cardapio', CardapioController.store);

module.exports= routes;