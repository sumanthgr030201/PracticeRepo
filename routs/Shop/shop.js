const express = require('express');
const shopRout = express.Router();

const shopController = require('../../controller/shop/shopController');

shopRout.get('/home',shopController.getProducts);
shopRout.get('/cart', shopController.getCart)
shopRout.post('/add-to-cart',shopController.addToCart)
shopRout.get('/product',shopController.getProducts);
shopRout.get('/product/:productId',shopController.getProductDetails)

exports.shopRout = shopRout;