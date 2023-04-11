const Movies = require('../models/movies.model')

const findAllMovies = async () => {
    const movies = await Movies.findAll()
    return movies
}

const findMovieById = async (id) => {
    const data = await Movies.findOne({
        where: {
            id: id,
        }
    })
    return data
}

const createMovie = async (movieObj) => {
    const newMovie = await Movies.create({
        title: movieObj.title,
        description: movieObj.description,
        year: movieObj.year,
        director: movieObj.director
    })
    return newMovie
}

const updateMovie = async(id, movieObj) => {

    const selectedMovie = await Movies.findOne({
        where: {
            id: id
        }
    })
    
    if(!selectedMovie) return null

    const modifiedMovie = await selectedMovie.update(movieObj)
    return modifiedMovie
}

const deleteMovie = async(id) => {
    const movie = await Movies.destroy({
        where: {
            id: id
        }
    })
    return movie // 1 || 0
}

module.exports = {
    findAllMovies,
    findMovieById,
    createMovie,
    updateMovie,
    deleteMovie
}
