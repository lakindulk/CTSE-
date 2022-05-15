const mongoose = require('mongoose');

const wishschema = new mongoose.Schema({

    buyerID: {
        type: String,
        required: true,
    },
    productname: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
  

})

const Wishlist = mongoose.model("Wishlist", wishschema);

module.exports = Wishlist;

