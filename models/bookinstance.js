var mongoose = require('mongoose');

var moment = require('moment');
var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema(
  {
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true }, //reference to the associated book
    imprint: {type: String, required: true},
    status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
    // enum allows us to set the allowed vaules of a string
    due_back: {type: Date, default: Date.now}
    // default allows us to set a specific value (in this case it calls the current date function)
  }
);

// Virtual for bookinstance's URL
BookInstanceSchema
.virtual('url')
.get(function () {
  return '/catalog/bookinstance/' + this._id;
});

// Virtual date formatting val.due_back_formatted
BookInstanceSchema
.virtual('due_back_formatted')
.get(function () {
  return moment(this.due_back).format('MMMM Do, YYYY');
});

// Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);