const { Schema, model} = require('mongoose');

const photo = new Schema({
    title: String,
    description: String,
    imageURL: String,
    public_id: String
});

module.exports = model('Photo', photo);