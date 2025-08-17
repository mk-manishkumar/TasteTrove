import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

// REGISTER
export const registerController = async (req, res) => {
  try {
    const { userName, email, password, phone, address, answer, userType } = req.body;

    if (!userName || !email || !password || !address || !phone || !answer) {
      return res.status(400).send({ success: false, message: "Please Provide All Fields" });
    }

    // default userType if not provided
    const role = userType || "user";

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).send({ success: false, message: "Email Already Registered, please Login" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
      address,
      phone,
      answer,
      userType: role, 
    });

    res.status(201).send({ success: true, message: "Successfully Registered", user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error In Register API", error });
  }
};


// LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(500).send({ success: false, message: "Please Provide Email OR Password" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({ success: false, message: "User Not Found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(500).send({ success: false, message: "Invalid Credentials" });
    }
    const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    user.password = undefined;
    res.status(200).send({ success: true, message: "Login Successfully", token, user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error In Login API", error });
  }
};
