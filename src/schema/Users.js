/* Imports */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const model = mongoose.model;


/* Schema */
const UserSchema = new Schema({
  userName: { type: String, unique: true },
  email: { type: String, unique: true, required:true },
  password: { type: String, required:true },
});

UserSchema.statics.hashPassword = async (password)=> {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.statics.comparePassword = async (
  password,
  hashPassword
)=> {
  return bcrypt.compare(password, hashPassword);
};
const UserModel = model("User", UserSchema);
module.exports = UserModel;
