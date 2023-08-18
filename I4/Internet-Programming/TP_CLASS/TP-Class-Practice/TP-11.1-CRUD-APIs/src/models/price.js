var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var priceSchema = new mongoose.Schema({
    price: Number,
    source: {
        type:String,
    },
    product:{
        type: Schema.Types.ObjectId,
        ref:'Products',
        required : true
    }
}, {
  timestamps: true,
});

var product = mongoose.model('Prices', priceSchema);
module.exports = product;