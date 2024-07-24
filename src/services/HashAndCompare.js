import bycrptjs from "bcryptjs";

export const hashPassword = (password) => {
  return bycrptjs.hashSync(password, parseInt(process.env.SALT_ROUND));
};

export const comparePassword = (password, hashPassword) => {
  return bycrptjs.compareSync(password, hashPassword);
};
