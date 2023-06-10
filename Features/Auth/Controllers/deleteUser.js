const userModel = require("../Schemas/user")

const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    console.log();
    const deleteUser = await userModel.deleteOne({_id: id}) 
    if (deleteUser) {
        res.status(200).send(`Deleted User With id: ${id}`)
    }
    else {
        res.status(404).send(`User With id ${id} Was Not Found `)
    }
}

module.exports = deleteUser