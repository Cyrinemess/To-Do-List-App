// controller is a function that handles the router
const userModel = require("../Schemas/user")

const getUsers = async (req, res, next) => {
    try{
        const users = await userModel.find().select(["-password", "-__v"])
        
        if (users.length === 0) {
            res.status(404).send("No Users Found")
        }
        res.status(200).json(users)
    }
    catch (error) {
        next(error) // ki n7eb n3adi lel middleware
        res.status(500).send("Server Error")
    }
}

module.exports = getUsers