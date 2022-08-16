const mongoose = require('mongoose');
const colors = require('colors');

const connectDb = async () => {
    try{
        const conn = await mongoose.connect(process.env.Mongo_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true,
        })
        console.log(`MongoDB connected ${conn.connection.host}`.underline.blue);
    }catch(error){
        console.error(`Error : ${error.message}.red`);
        process.exit(1);
    }
}

module.exports = connectDb;