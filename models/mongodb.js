var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/nodejs");

var db = mongoose.connection;

db.on('error', console.error.bind(console,'mongo connenct error'));
exports.mongoose = mongoose;