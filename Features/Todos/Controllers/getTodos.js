const todoModel = require("../Schemas/todo")

const getTodos = async (req, res, next) => {
    try {
        const todos = await todoModel.find().select("-__v")
        if (todos.length === 0) {
            res.status(404).send("No todos Found")
        }
        res.status(200).json(todos)
    }

    catch (error) {
        next(error)
        res.status(500).send("Server Error")
    }
}

module.exports = getTodos