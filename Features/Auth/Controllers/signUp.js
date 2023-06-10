const userModel = require("../Schemas/user");

const signUp = async (req, res, next) => {
  console.log(req.body);
  try {
    const response = await userModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });

    const createdUser = response._doc;
    if (createdUser) {
      const { password, __v, ...otherUserInfo } = createdUser;

      return res.status(201).json({
        payload: otherUserInfo
      });
    } else {
      return res.status(400).json({
        message: "Error creating user",
      });
    }
  } catch (err) {
    console.log("err: ", err);
  }
};

module.exports = signUp;
