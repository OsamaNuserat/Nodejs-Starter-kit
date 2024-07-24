import userModel from "../../../../DB/model/user.model.js";
import {
  comparePassword,
  hashPassword,
} from "../../../services/HashAndCompare.js";
import { generateToken } from "../../../services/GenerateAndVerify.js";
import { signupSchema } from "../auth.validation.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const validationResult = signupSchema.validate(req.body , {abortEarly:false});
  return res.send(validationResult)
  const hashValue = hashPassword(password);
  const user = await userModel.insertMany({
    name,
    email,
    password: hashValue,
  });

  return res.json({ message: "success", user });
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.json({ message: "user not found" });
  }
  const match = comparePassword(password, user.password);
  if (!match) {
    return res.json({ message: "password not match" });
  }
  const token = generateToken({ id: user._id, isLoggedIn: true });
  return res.json({ message: "success", token });
};
