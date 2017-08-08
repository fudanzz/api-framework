var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema(
    {
        name: {
            type: String,
            require: true,
            unqiue: true
        }
    }
);

module.exports = mongoose.model('category', CategorySchema);