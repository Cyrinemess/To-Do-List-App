const userModel = require("../Schemas/user");

const login = async (req, res, next) => {
  try {
    const response = await userModel.find({
      email: req.body.email,
      password: req.body.password,
    });
    if (response.length === 1) {
      return res.status(200).json({
        payload: "User Logged Successfully",
      });
    } else {
      return res.status(400).json("User Not Found");
    }
  } catch (err) {
    console.log("Error :", err);
  }
};

module.exports = login;
