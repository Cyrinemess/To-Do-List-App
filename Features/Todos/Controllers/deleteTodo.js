const todoModel = require("../Schemas/todo")

const deleteTodo = async (req, res, next) => {
    const id = req.params.id;
    console.log();
    try{
        const deleteTodo = await todoModel.deleteOne({_id: id}) 
    if (deleteTodo) {
        res.status(200).send(`Deleted ToDo With id: ${id}`)
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

module.exports = deleteTodo