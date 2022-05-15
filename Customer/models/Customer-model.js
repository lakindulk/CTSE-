const mongoose = require('mongoose');

const customerschema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },

})

const Customer = mongoose.model("Customer",customerschema);

module.exports = Customer;

