const express = require("express");
const authRouter = require("./Features/Auth/Routers");
const todoRouter = require("./Features/Todos/Routers");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());


const port = 3001;

app.get("/", (req, res) => {
  res.send("welcome to To Do List App Project");
});

app.use(express.json()); //we've called the built in middleware (express.json())
//to show my sent request in the body of postman
app.use(authRouter);
app.use(todoRouter);

app.listen(port, async () => {
  console.log(`listening on ${port} for requests`);
  mongoose.connect("mongodb://127.0.0.1:27017/todosdb").then(() => {
    console.log("Connected to DB sucessfully");
  });
});
