import User from "../models/User.model.js";
import bcrypt from "bcryptjs";

// GET USER INFO
export const getUserController = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.body.id });
    if (!user) {
      return res.status(404).send({ success: false, message: "User Not Found" });
    }
    user.password = undefined;
    res.status(200).send({
      success: true,
      message: "User get Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Eror in Get User API", error });
  }
};

// UPDATE USER
export const updateUserController = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.body.id });
    if (!user) {
      return res.status(404).send({ success: false, message: "user not found" });
    }
    const { userName, address, phone } = req.body;
    if (userName) user.userName = userName;
    if (address) user.address = address;
    if (phone) user.phone = phone;
    await user.save();
    res.status(200).send({ success: true, message: "USer Updated SUccessfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error In Udpate User API", error });
  }
};

// UPDATE USER PASSWORD
export const updatePasswordController = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.body.id });
    if (!user) {
      return res.status(404).send({ success: false, message: "User Not Found" });
    }
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      return res.status(500).send({ success: false, message: "Please Provide Old or New Password" });
    }
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(500).send({ success: false, message: "Invalid old password" });
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save();
    res.status(200).send({ success: true, message: "Password Updated!" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error In Password Update API", error });
  }
};

// RESET PASSWORD
export const resetPasswordController = async (req, res) => {
  try {
    const { email, newPassword, answer } = req.body;
    if (!email || !newPassword || !answer) {
      return res.status(500).send({ success: false, message: "Please Provide All Fields" });
    }
    const user = await User.findOne({ email, answer });
    if (!user) {
      return res.status(500).send({ success: false, message: "User Not Found or invalid answer" });
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save();
    res.status(200).send({ success: true, message: "Password Reset Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error in PASSWORD RESET API", error });
  }
};

// DELETE PROFILE ACCOUNT
export const deleteProfileController = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).send({ success: true, message: "Your account has been deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error In Delete Profile API", error });
  }
};
