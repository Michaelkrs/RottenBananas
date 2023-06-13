const { verifyToken } = require("../helpers/jwt");

const { User } = require("../models/index");

const authN = async (req, res, next) => {
  try {
    const headers = req.headers.access_token;

    if (!headers) {
      throw {
        name: "unauthorized",
      };
    }

    const payload = verifyToken(headers);

    const user = await User.findByPk(payload.id);

    if (!user) {
      throw {
        name: "unauthorized",
      };
    }

    req.userData = {
      id: payload.id,
      email: payload.email,
    };

    next();
  } catch (error) {
    next(error);
  }
};

// const authZ = async (req, res, next) => {
//   try {
//     const UserId = req.userData.id;

//     const PostId = req.params.id;

//     const post = await Post.findByPk(PostId);

//     if (!post) {
//       throw {
//         name: "postNotFound",
//       };
//     }

//     if (post.UserId !== UserId) {
//       throw {
//         name: "forbidden",
//       };
//     }

//     next();
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = { authN };
