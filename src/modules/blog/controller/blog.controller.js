import blogModel from "../../../../DB/model/blog.model.js";

export const addBlog = async (req, res) => {
  const { title, description, userID } = req.body;
  const blog = await blogModel.create({ title, description, userID });
  return res.json({ message: "success", blog });
};

export const getBlogs = async (req, res) => {
  const blog = await blogModel.find().populate({
    path: "userID",
    select: "-_id name",
  });
  return res.json({ message: "success", blog });
};
