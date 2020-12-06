const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
