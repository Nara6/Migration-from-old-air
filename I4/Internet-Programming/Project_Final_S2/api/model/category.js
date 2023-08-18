const mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    image_url:{
        type: String
    }
},
{
    timestamps: true
});
const Category = mongoose.model("Category", categorySchema);
module.exports= Category