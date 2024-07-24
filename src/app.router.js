import connectDB from "../DB/connection.js";
import authRouter from "../src/modules/auth/auth.router.js";
import userRouter from "../src/modules/user/user.router.js";
import blogRouter from "../src/modules/blog/blog.router.js";
const initApp = (app, express) => {
  connectDB();
  app.use(express.json());
  app.use("/auth", authRouter);
  app.use("/users", userRouter);
  app.use("/blogs", blogRouter);
  app.use("*", (req, res) => {
    return res.json({ message: "page not found" });
  });
};

export default initApp;
