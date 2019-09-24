const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const random = require('mongoose-simple-random');

let quoteSchema = new Schema({
    author: {type: String, required: true, max: 100},
    body: {type: String, required: true},
});
 quoteSchema.plugin(random);

// Export the model
module.exports = mongoose.model('Quote', quoteSchema);