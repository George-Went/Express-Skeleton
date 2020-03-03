var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
    title: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
    // Is a referance to the author.js model (author is also required)
    summary: {type: String, required: true},
    isbn: {type: String, required: true}, // International Standard Book Number
    genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
    // Is a referance to the genre.js model
  }
);

// Virtual for book's URL concatonates mongoDB_id with string
BookSchema
.virtual('url') // create virtual datatype
.get(function () {
  return '/catalog/book/' + this._id;   // combine book id with url
});

//Export model
module.exports = mongoose.model('Book', BookSchema);