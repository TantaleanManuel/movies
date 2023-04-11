const router = require("express").Router();

const movieServices = require("./movies.services");

router.route("/movies")
  .get(movieServices.getAllMovies)
  .post(movieServices.postNewMovie);

router.route("/movies/:id")
  .get(movieServices.getMovieById)
  .patch(movieServices.patchMovie)
  .delete(movieServices.deleteMovie);

module.exports = router;
