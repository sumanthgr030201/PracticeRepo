const express = require('express');
const adminRout = express.Router();



const adminController = require('../../controller/admin/adminController');

adminRout.get('/add-product', adminController.addProductPage)
adminRout.post('/',adminController.addProduct)



exports.adminRout = adminRout;