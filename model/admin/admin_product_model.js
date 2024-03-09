const path = require('path');
const fs = require('fs')

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json')

function getProductFromFile(cb){
    fs.readFile(p, (err, productInfo)=>{
        if(err){
            cb([])
        }
        else{
            cb(JSON.parse(productInfo))
        }
    })

}


module.exports= class ProductDetails{
    constructor (productName,productImage,productPrice,productDescription){
        this.productName=productName
        this.productImage=productImage
        this.productPrice=productPrice
        this.productDescription=productDescription
    }
    save(){
         this.id = Math.random().toString()
         getProductFromFile((productInfo)=>{
            productInfo.push(this);
            fs.writeFile(p,JSON.stringify(productInfo),err=>{
                console.log(err||'Product added sucessfully')
            })
         })
    }
    static fetchAll(cb){
        getProductFromFile(cb)
    }
    static findById(id,cb){
        getProductFromFile((fileContent)=>{
            const foundProduct = fileContent.find((prod)=> prod.id === id);
            cb(foundProduct)
        })
    }
}