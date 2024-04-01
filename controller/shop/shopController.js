const path = require('path')

const productDetails = require('../../model/admin/admin_product_model')
const cart = require('../../model/shop/cart')
const { getItemsFromCart } = require('../../model/shop/shop_product_model')

exports.getProducts = (req,res,next)=>{
    productDetails.fetchAll((products)=>{
        console.log(req.path)
        if(req.path=='/home'){
            res.render(path.join('shop','home'),{products:products,pageTitle:'Home'})
        }
        res.render(path.join('shop','product'),{products:products,pageTitle:'products'})
    })
}
exports.getProductDetails = (req,res,next) =>{
    const productId = req.params.productId;
    productDetails.findById(productId, (details)=>{
        res.render(path.join('shop','productDetails'),{productDetails:details,pageTitle:'products'})
    })
}
exports.addToCart = (req, res,next)=>{
    const productId = req.body.productId;
    productDetails.findById(productId,(product)=>{
        cart.addNewProduct(productId,product.productPrice )
    })
    res.redirect('/shop/cart')
    };
exports.getCart = (req,res,next) =>{
    getItemsFromCart((cartProducts,totalPrice)=>{
        console.log(cartProducts,'cartProducts')
        const cartProductDetails = []
        productDetails.fetchAll((products)=>{
            for (let product of products){
                 const ProdDetails = cartProducts.find((prod)=>prod.id===product.id);
                if(ProdDetails){
                    cartProductDetails.push({...product,qty:cartProducts.qty})
                    
                }
            }
            res.render(path.join('shop','cart'),{cartProductDetails:cartProductDetails, totalPrice:totalPrice,pageTitle:'Cart'})
        })  
        
        
    })
}
