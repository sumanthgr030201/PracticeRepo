const path = require('path');
const ProductDetails = require('../../model/admin/admin_product_model');
const { query } = require('express');

exports.getProducts = (req,res,next)=>{
    ProductDetails.fetchAll((products)=>{
        res.render(path.join('admin','admin-products'),{products:products,pageTitle:'Admin-products'})
    })
}
exports.addProductPage = (req,res,next)=>{
    res.render(path.join('admin','add-product'),{'pageTitle':'Add-product'})
};
exports.addProduct = (req,res,next)=>{
    let productDetails = req.body;
    const productName = productDetails.productName
    const productImage = productDetails.productImage
    const productPrice = productDetails.productPrice
    const productDescription = productDetails.productDescription
    const product = new ProductDetails(productName,productImage,productPrice,productDescription)
    product.save()
    res.redirect(301,'/admin/add-product')
    next()

};
exports.editProduct=(req,res,next)=>{
    const id = req.query.id;
    const isEditing = req.query.isEditing;
    console.log(isEditing)
    ProductDetails.fetchAll((products)=>{
        const editingProduct = products.find(product=>product.id === id)
        console.log(editingProduct);
        res.render(path.join('admin','add-product'), {editingProduct,isEditing})
    })
}