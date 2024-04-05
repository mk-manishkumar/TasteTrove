import { User } from "../models/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// register function
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.json({ message: "User Already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    user = await User.create({ name, email, password: hashPassword });

    res.json({ message: "User Registered Successfully..!", user });
  } catch (error) {
    res.json({ message: error });
  }
};

// login function
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.json({ message: "User not exist" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1D",
    });

    res.json({ message: `Welcome ${user.name}`, token });
  } catch (error) {
    res.json({ message: error.message });
  }
};

// show profile
export const profile = async (req, res) => {
  res.json({ User: req.user });
};
