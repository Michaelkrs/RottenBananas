const Controller = require("../controllers/login-register-controller");
const errorHandler = require("../helpers/error-handler");
const moviesRouter = require("./movies-router");
const genresRouter = require("./genres-router");
const clientRouter = require("./client-router");
const { authN } = require("../middleware/auth");

const router = require("express").Router();

router.use("/movies", authN, moviesRouter);
router.use("/genres", authN, genresRouter);
router.use("/client", clientRouter);
router.post("/login", Controller.login);
router.post("/register", authN, Controller.register);

router.use(errorHandler);

module.exports = router;
