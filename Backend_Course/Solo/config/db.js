const mongoose = require('mongoose')
const connetMongoDB = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/Solo", {
            autoIndex: true,
            serverSelectionTimeoutMS: 30000,
        })
        console.log('connect success')
    }
    catch(err) {
        console.log('Mogoose: ', err)
    }
}
module.exports = connetMongoDB