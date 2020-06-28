const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const robinSchema = new Schema(
    {
        category: {type:String, required: true},
        like: {type: Number, required: true},
        date: {type:Date, required: true},
        file: {type:String, required: true}
    },
    {
        timestamps: true
    }
);

const Robin = mongoose.model('Robin', robinSchema);

module.exports = Robin;