import connectDB from "../DB/connection.js";
import authRouter from "../src/modules/auth/auth.router.js";
const initApp = (app, express) => {
  connectDB();
  app.use(express.json());
  app.use("/", (req, res) => {
    res.json({ message: "success" });
  });
  app.use("/auth", authRouter);
  app.use("*", (req, res) => {
    return res.json({ message: "page not found" });
  });
};

export default initApp;
