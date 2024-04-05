import { User } from "../models/users.js";
import jwt from "jsonwebtoken";

export const Authenticate = async (req, res, next) => {
  const token = req.header("Auth");

  try {
    if (!token) {
      return res.json({ message: "You need to login first" });
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY);

    const userId = decode.userId;

    let user = await User.findById(userId);

    if (!user) {
      return res.json({ message: "User not exist" });
    }

    req.user = user;

    next();
  } catch (error) {
    res.json({ message: error });
  }
};
