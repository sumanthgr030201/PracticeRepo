const express = require('express');
const adminRout = express.Router();



const adminController = require('../../controller/admin/adminController');

adminRout.get('/add-product', adminController.addProductPage)
adminRout.get('/admin-Products', adminController.getProducts)
adminRout.post('/edit-product', adminController.editProduct)
adminRout.post('/',adminController.addProduct)



exports.adminRout = adminRout;