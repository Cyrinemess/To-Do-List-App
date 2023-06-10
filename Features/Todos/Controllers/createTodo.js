const todoModel = require("../Schemas/todo")

const createTodo = async (req, res, next) => {
    console.log(req.body);
    try {
        const response = await todoModel.create({
            value: req.body.value,
            date: req.body.date,
            state: req.body.state,
            user_id: req.body.user_id,
        });
        const createdTodo = response._doc;
        if (createdTodo) {
            const { ...otherTodoInfo } = createdTodo;
            return res.status(201).json(otherTodoInfo);
        } else {
            return res.status(400).json({
                message: "Error Creating ToDo",
            });
        }
    } catch (err) {
        console.log("err: ", err);
    }
};

module.exports = createTodo;