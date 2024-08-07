import Admin from "../models/Admin.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await Admin.findOne({ email });
    if (userExist) {
      return res.status(404).json({ Message: "User already exists" });
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newAdmin = new Admin({
      email,
      password: hashedPassword,
    });
    await newAdmin.save();
    res.status(201).json({ message: "Registered successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Intrenal server error", error: error.message });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await Admin.findOne({ email });
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }
    const validPassword = bcryptjs.compareSync(password, userExist.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Incorrect password" });
    }
    else{
        const token = jwt.sign({user:userExist.email, id:userExist._id}, process.env.JWT_KEY, {expiresIn:'1d'})
        res
          .status(200)
          .json({ message: "Logged in" , token:token});
    }
  } catch (error) {
    res
      .status(500)
      .json({ Message: "Internal server error", Error: error.message });
  }
};
