const mongoose = require("mongoose")
const express = require("express")
const getUsers = require("../Controllers/getUsers")
const createUser = require("../Controllers/createUser")
const deleteUser = require("../Controllers/deleteUser")


const authRouter = express.Router()

authRouter.get("/users", getUsers)
authRouter.post("/users", createUser)
authRouter.delete("/users/:id", deleteUser) // :before id to make it a varaible or params that changes with each user

module.exports = authRouter

