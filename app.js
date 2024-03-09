const express = require('express');
const pug = require('pug')
const path = require('path')


const bodyParser = require('body-parser');

const admin = require('./routs/Admin/admin')
const shop = require('./routs/Shop/shop')
const errorController = require('./controller/errorController/error')

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine','pug')
app.set('views', path.join(__dirname , 'view'))

app.use('/admin', admin.adminRout)
app.use('/shop', shop.shopRout)

app.use('/',errorController.get404)

const port = process.env.port|2000;
app.listen(port,()=>{
    console.log(`app is running in the port ${port}`)
})