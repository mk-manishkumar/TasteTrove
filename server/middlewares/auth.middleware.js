import JWT from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    // Get token from Authorization header
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) {
      return res.status(401).send({
        success: false,
        message: "Please provide Auth Token",
      });
    }

    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Un-Authorized User",
        });
      }
      req.body.id = decode.id;
      next();
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Please provide Auth Token",
      error,
    });
  }
};

export default authMiddleware;
