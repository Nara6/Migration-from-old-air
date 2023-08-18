const mongoose = require('mongoose')

const dbURL = 'mongodb://localhost:27017/Users'

const connectDB = async () => {
    await mongoose.connect(dbURL, {
        autoIndex : true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000
    })
    console.log("connected successful");
}

module.exports = connectDB