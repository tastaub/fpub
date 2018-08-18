const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BeerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
});

module.exports = Beer = mongoose.model("beer", BeerSchema);
