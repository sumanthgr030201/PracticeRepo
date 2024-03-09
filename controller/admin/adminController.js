const path = require('path');
const ProductDetails = require('../../model/admin/admin_product_model');


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