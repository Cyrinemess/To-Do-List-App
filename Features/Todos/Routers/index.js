const mongoose = require("mongoose")
const express = require("express")
const getTodos = require("../Controllers/getTodos")
const createTodo = require("../Controllers/createTodo")
const deleteTodo = require("../Controllers/deleteTodo")
const updateTodo = require("../Controllers/updateTodo")

const todoRouter = express.Router()

todoRouter.get("/todos", getTodos)
todoRouter.post("/todos", createTodo)
todoRouter.delete("/todos/:id", deleteTodo)
todoRouter.put("/todos/:id", updateTodo)



module.exports = todoRouter