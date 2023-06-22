const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");

require("dotenv").config();
const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res) {
    console.log(process.env.SECRET_KEY);
    const { email, password, role } = req.body;
    if (!email || !password) {
      return res.json({ message: "Incorrect email or password" });
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return res.json({ message: "User with this email has already exist" });
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    const basket = await Basket.create({ userId: user.id });
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }
  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.json({ message: "User with this email is not exist" });
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return res.json({ message: "Incorrect Password" });
    }
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async auth(req, res) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    console.log(token);
    return res.json({ token });
  }
}

module.exports = new UserController();
