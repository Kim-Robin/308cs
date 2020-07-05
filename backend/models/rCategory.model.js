const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rcategorySchema = new Schema({
    categoryname:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 1
    }
},{
    timestamps: true
});

const Rcategory = mongoose.model('Rcategory', rcategorySchema);

module.exports = Rcategory;