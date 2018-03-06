const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentsSchema = new Schema({
  description: String,
  recipeId: { type: Schema.Types.ObjectId, ref: "recipe" }
});

module.exports = mongoose.model("Comment", commentsSchema);
