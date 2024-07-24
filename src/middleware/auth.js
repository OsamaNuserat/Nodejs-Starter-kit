import { verifyToken } from "../services/GenerateAndVerify.js";

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization?.startsWith(process.env.BEARER_KEY)) {
    return res.json({ message: "authorization required" });
  }
  const token = authorization.split(process.env.BEARER_KEY)[1];
  if (!token) {
    return res.json({ message: "token is required" });
  }
  const decoded = verifyToken(token);
  req.id = decoded.id;
  next();
};

export default auth;