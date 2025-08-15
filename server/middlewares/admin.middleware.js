import User from "../models/User.model.js";

const adminMiddleware = async (req, res, next) => {
  try {
    const user = await User.findById(req.body.id);
    if (user.usertype !== "admin") {
      return res.status(401).send({
        success: false,
        message: "Only Admin Access",
      });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Un-Authorized ACCESS",
      error,
    });
  }
};

export default adminMiddleware;
