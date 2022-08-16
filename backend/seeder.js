const mongoose = require("mongoose");
const dotenv = require('dotenv');
const users = require('./data/Users')
const User = require('./models/UserModel')
const Product = require('./models/ProductModel')
const Order = require('./models/OrderModel')
require('colors')
const products = require('./data/products')
const connectDb = require("./config/config")
dotenv.config();
connectDb();


const importData =async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        const createUser = await User.insertMany(users);
        const adminUser = createUser[0]._id
        const sampleData = products.map( (product) => {
            return{...product,user:adminUser}
        })
        await Product.insertMany(sampleData)
        console.log("data Imported".green.inverse);
        process.exit();

    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
}

const dataDestroy = async() => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log("Data Destory".green.inverse);
        process.exit();
      } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
      }
}

if(process.argv[2] === "-d"){
    dataDestroy()
}else{
    importData()
}