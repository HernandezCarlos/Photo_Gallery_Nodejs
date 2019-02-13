const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    nombre: String,
    apellido: String,
    email: String,
    autos: [{
        type: Schema.Types.ObjectId,
        ref: 'car'
    }]
})

module.exports = mongoose.model('user', userSchema)