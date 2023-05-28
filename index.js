const { log } = require('console')
const express = require('express')
const app = express()
const port = 3001

app.get("/", (req, res)=>{
    res.send("welcome to To Do List App Project")
})

app.listen(port, ()=>{
    console.log(`listening on ${port} for requests`);
})