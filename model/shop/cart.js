const path = require('path');
const fs = require('fs');

const p = path.join(path.dirname(process.mainModule.filename),'data','cart.json')

module.exports = class Cart{
    static addNewProduct(id, productPrice){
        fs.readFile(p, (error, fileContent)=>{
            let cart = {products:[], totalPrice:0}
            if(!error){
                cart = JSON.parse(fileContent)
            }
            const exestingProductIndex = cart.products.findIndex((item)=> id === item.id)
            const exestingProduct = cart.products[exestingProductIndex]
            if(exestingProduct){        
                const updatedProduct = {...exestingProduct};
                updatedProduct.qty+=1;
                cart.products[exestingProductIndex] = updatedProduct;
            }
            else{
                const updatedProduct = {id:id, qty:1}
                cart.products = [...cart.products,updatedProduct]
            }
            cart.totalPrice += parseInt(productPrice);
            fs.writeFile(p, JSON.stringify(cart),()=>{
                console.log('Cart Added Sucessively')
            })
        }) 
    }
}