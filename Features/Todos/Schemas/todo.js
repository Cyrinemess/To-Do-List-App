const mongoose = require("mongoose");
const userModel = require("../../Auth/Schemas/user");

const todoSchema = new mongoose.Schema({
  value: String,
  date: Date,
  state: String,
  user_id: String,
});

const todoModel = new mongoose.model("todos", todoSchema);

module.exports = todoModel;
