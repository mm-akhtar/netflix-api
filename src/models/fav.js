const mongoose = require("mongoose");

const favSchema = mongoose.Schema({
  movieId: {
    type: String,
    trim: true,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Fav = mongoose.model("Fav", favSchema);

module.exports = Fav;
