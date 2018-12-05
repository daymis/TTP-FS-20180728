const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//user schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (email) {
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
      }, message: props => `${props.value} is not a valid email.`
    }
  },
  password: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    default: 5000
  },
  transactions: [],
  stocks: {
    type: Map,
    of: String
  }
});

module.exports = User = mongoose.model('user', UserSchema);