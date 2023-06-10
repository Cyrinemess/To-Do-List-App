const todoModel = require("../Schemas/todo")

const updateTodo = async (req, res, next) => {

    const id = req.params.id
    const value = req.body.value
    try{
        const updateTodo = await todoModel.findByIdAndUpdate( {"_id" : id}, { $set : {"value": value} }).select("-__v")

        if (updateTodo) {
            res.status(200).send({msg :`Updated ToDo With id: ${id}`, updateTodo})
        }
        else {
            res.status(404).send(`ToDo With id ${id} Was Not Found `)
        }
    }
    catch(error) {
        next(error) 
        res.status(500).send("Server Error")
    }
}

module.exports = updateTodo