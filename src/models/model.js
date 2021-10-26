const mongoose = require('mongoose');
// const validator = require('validator');

// To avoid pluralization of collection name in database
mongoose.pluralize(null);

// Creating Schema -- Structure of Collection
const expenseSchema = new mongoose.Schema({
    reason: {
        type: String,
        required: true,
        trim: true,
    },
    paidTo: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: false,
        trim: true,
    },
    paymentType: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});



// Creating model -- creating collection
const Expenses = mongoose.model("Expenses", expenseSchema);

module.exports = Expenses;