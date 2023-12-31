const { User } = require("../models/index");
const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");

class Controller {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw {
          name: "noInput",
        };
      }

      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        throw {
          name: "loginFailed",
        };
      }

      const passwordValidation = comparePassword(password, user.password);

      if (!passwordValidation) {
        throw {
          name: "loginFailed",
        };
      }

      const token = signToken({
        id: user.id,
        email: user.email,
        username: user.username,
      });

      res.status(200).json({
        access_token: token,
        id: user.id,
        email: user.email,
        username: user.username,
      });
    } catch (error) {
      next(error);
    }
  }

  static async register(req, res, next) {
    try {
      const { email, password, username, phoneNumber, address } = req.body;

      const user = await User.create({
        username,
        email,
        password,
        phoneNumber,
        address,
      });

      res.status(201).json({
        id: user.id,
        email: user.email,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
