const mongoose = require("mongoose");
const ObjectId = mongoose.ObjectId;
const restaurantSchema = mongoose.Schema({
  restaurant_id: { type: String, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  cuisine: { type: String, required: true },
  address: {
    building: { type: String, required: true },
    street: { type: String, required: true },
    zipcode: { type: String, required: true },
  },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
