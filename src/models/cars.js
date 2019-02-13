const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    marca: String,
    modelo: String,
    año: Number,
    vendedor: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})

module.exports = mongoose.model('car', carSchema)