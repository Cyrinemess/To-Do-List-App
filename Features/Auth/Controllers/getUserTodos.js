const todoModel = require("../../Todos/Schemas/todo");
const userModel = require("../Schemas/user");

const getUserTodos = async (req, res, next) => {
  console.log(req.query.date);
  const id = req.params.id;

  try {
    const loggedUser = await userModel.find({ _id: id });
    console.log(loggedUser);
    if (loggedUser === 0) {
      res.status(404).send("No user found");
    }

    let filter = { user_id: id };
    if (req.query?.date) {
      filter.date = req.query.date;
    }
    if (req.query?.state) {
      filter.state = req.query.state;
    }
    const loggedUserTodos = await todoModel.find(filter).select("-__v");

    console.log(loggedUserTodos);

    if (loggedUserTodos.length >= 1) {
      res.status(200).send(loggedUserTodos);
    } else {
      res.status(404).send("No ToDos Created Yet");
    }
  } catch (error) {
    next(error);
    res.status(500).send("Server Error");
  }
};
module.exports = getUserTodos;
