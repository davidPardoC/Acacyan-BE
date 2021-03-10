const User = require("../schema/Users");

const createuser = async (req, res) => {
  const { userName, email, password } = req.body;
  if (await checkExistinguser(userName, email)) {
    return res
      .status(403)
      .json({ error: "Email or userName is already in use" });
  }
  try {
    let user = await new User({
      userName,
      email,
      password: await User.hashPassword(password),
    }).save();
    res.status(201).json({ message: "User created succesfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const login = async (req, res) => {
  const { userName, email, password } = req.body;
  if (userName) {
    await loginUsername(userName, password, res);
  } else if (email) {
    await loginEmail(email, password, res);
  }
};

const loginUsername = async (userName, password, res) => {
  const USER = await User.findOne({ userName });
  if (USER !== null) {
    if (await User.comparePassword(password, USER.password)) {
      return res.status(200).json({ loged: true });
    } else {
      return res.status(500).json({ error: "Incorrect username or password" });
    }
  } else {
    return res.status(404).json({ error: "User not found" });
  }
};

const loginEmail = async (email, password, res) => {
  const USER = await User.findOne({ email });
  if (USER !== null) {
    if (await User.comparePassword(password, USER.password)) {
      res.status(200).json({ loged: true });
    } else {
      res.status(500).json({ error: "Incorrect email or password" });
    }
  } else {
    return res.status(404).json({ error: "User not found" });
  }
};

const checkExistinguser = async (userName, email) => {
  const userExists = await User.findOne({ userName });
  const emailExist = await User.findOne({ email });
  if (userExists || emailExist) {
    return true;
  } else {
    return false;
  }
};

const UserController = {
  createuser,
  login,
};

module.exports = UserController;
