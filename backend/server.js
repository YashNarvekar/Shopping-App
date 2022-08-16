const express = require('express');
const{ errorHandler } = require('./middleware/errorMiddleware');
const colors = require('colors');
const products = require('./data/products')
const dotenv = require('dotenv');
const connectDb = require('./config/config')
const ProductRoutes = require('./routes/productsRoute')
dotenv.config();

connectDb();
const app = express();



// dotenv config

app.get('/', (req,res) => {
    res.send('<h1>Welcome to node server</h1>')
})

app.use('/api',ProductRoutes)


app.use(errorHandler)
// app.get('/products', (req,res)=> {
//     res.json(products);
// })

// app.get('/products/:id', (req,res)=>{
//     const product = products.find(p=>p._id === req.params.id )
//     res.json(product)
// })
const PORT =8080;

app.listen(process.env.PORT || PORT,() => {
    console.log(`server running in ${process.env.NODE_ENV} MOde on port ${process.env.PORT}`.inverse);
})