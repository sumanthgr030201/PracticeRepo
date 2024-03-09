const express = require('express');
const shopRout = express.Router();

const shopController = require('../../controller/shop/shopController');

shopRout.get('/home',shopController.getProducts);
shopRout.get('/home/cart', shopController.getCart)
shopRout.post('/add-to-cart',shopController.addToCart)

exports.shopRout = shopRout;