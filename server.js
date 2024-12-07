const express = require('express')
const app = express();
app.get('/',function (req,res) {
    res.send('<h1>Hello World</h1>')
})
const products = [
{
    id : 1,
    name: "Apple"
},
{
    id : 2,
    name : "Samsung"
},
{
    id : 3,
    name : "OnePlus"
}

]
app.get('/products',function(req,res) {
    res.json(products)
})
app.get('/products/:id',function(req,res) {
    const product=products.filter(item=>item.id.toString() ===req.params.id)
    res.json(product)
})
app.listen(5000,console.log("server is Started...!"))