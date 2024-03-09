const path = require('path')

const productDetails = require('../../model/admin/admin_product_model')
const cart = require('../../model/shop/cart')
const { getItemsFromCart } = require('../../model/shop/shop_product_model')

exports.getProducts = (req,res,next)=>{
    productDetails.fetchAll((products)=>{
        res.render(path.join('shop','home'),{products:products,pageTitle:'Home'})
    })
}
exports.addToCart = (req, res,next)=>{
    const productId = req.body.productId;
    productDetails.findById(productId,(product)=>{
        cart.addNewProduct(productId,product.productPrice )
    })
    res.redirect('/shop/home')
    };
exports.getCart = (req,res,next) =>{
    getItemsFromCart((products)=>{
        
    })
}
