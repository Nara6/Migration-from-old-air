const mongoose = require('mongoose')
const connectMongoDB = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/ecommerce", {
            autoIndex: true,
            serverSelectionTimeoutMS: 30000,
            
        })
        console.log("MongoDB connected");
    }catch(err){
        console.log("Mongoose: ", err);
    }
}

module.exports = {
    connectMongoDB
}