const path = require('path');
const fs = require('fs')
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart')

exports.getItemsFromCart = (cb)=>{
    fs.readFile(p, (error, fileContent)=>{
        if(error){
            console.log(error)
        }
        else{
            const cart = JSON.parse(fileContent);
            const products = cart.products || []
            cb(products)
        }
    })
}