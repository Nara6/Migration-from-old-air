const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price:{
        type: Number,
        required: true
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    description: {
        type: String
    },
    image_url: {
        type: String
    },

},
{
    timestamps: true
});
var Product = mongoose.model('Product',productSchema);
module.exports = Product
