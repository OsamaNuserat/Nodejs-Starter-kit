import userModel from "../../../../DB/model/user.model.js";
export const getUsers = async (req, res) => {
  const user = await userModel.find({});
  return res.json({ message: "success", user });
};

export const updateUser = async (req, res) => {
  let id = req.id;
  const { email } = req.body;

  const user = await userModel.findByIdAndUpdate(id, { email }, { new: true });
  return res.json({ message: "success", user });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findByIdAndDelete(id);
  return res.json({ message: "success", user });
};
