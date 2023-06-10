const mongoose = require("mongoose")
const express = require("express")
const getUsers = require("../Controllers/getUsers")
const signUp = require("../Controllers/signUp")
const deleteUser = require("../Controllers/deleteUser")
const login = require("../Controllers/login")
const getUserTodos = require("../Controllers/getUserTodos")


const authRouter = express.Router()

authRouter.get("/users", getUsers)
authRouter.post("/users", signUp)
authRouter.post("/login", login)
authRouter.delete("/users/:id", deleteUser) // :before id to make it a varaible or params that changes with each user
authRouter.get("/users/:id/todos", getUserTodos) 
module.exports = authRouter

