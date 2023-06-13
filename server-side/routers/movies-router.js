const Controller = require("../controllers/movies-controller");
const router = require("express").Router();

router.get("/", Controller.readMovies);
router.post("/add", Controller.addMovie);
router.delete("/delete/:id", Controller.deleteMovie);
router.put("/edit/:id", Controller.editMovie);
router.get("/:id", Controller.readMovieDetail);

module.exports = router;
