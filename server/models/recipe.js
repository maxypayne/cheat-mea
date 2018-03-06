const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: { type: String, required: [true, "You must give a title"] },
  type: String,
  difficulty: String,
  budget: String,
  steps: Array,
  advisedDrink: String,
  creator: String,
  picture: String,
  comments: [{ type: Schema.Types.ObjectId, ref: "comment" }]
});

module.exports = mongoose.model("Recipe", recipeSchema);
