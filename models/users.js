var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    fullName: String
    /*userName: String,
    password: String,
    region: String,
    age: 0,
    email: String,
    userMiles: []*/
});

module.exports = mongoose.model('User', UserSchema);