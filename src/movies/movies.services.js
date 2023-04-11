const movieControllers = require('./movies.controllers')

const getAllMovies = (req, res) => {
    movieControllers.findAllMovies()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: 'Bad request', err})
        })
}

const getMovieById = (req, res) => {
    const id = Number(req.params.id)
    movieControllers.findMovieById(id)
        .then(data => {
            //? En caso de que data no exista (el usuario no exista)
            if(!data){
                return res.status(404).json({message: `Movie with id: ${id}, not found`})
            }
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request', err})
        })
}

const postNewMovie = (req, res) => {
    const movieObj = req.body
    movieControllers.createMovie(movieObj)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request', err})
        })
}

const patchMovie = (req, res) => {

    const id = Number(req.params.id) 
    const movieObj = req.body 

    movieControllers.updateMovie(id, movieObj)
        .then(data => {
            if(!data) {
                return res.status(404).json({message: 'Invalid ID'})
            }
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request', err})
        })
}

const deleteMovie = (req, res) => {
    const id = req.params.id 
    movieControllers.deleteMovie(id)
        .then(data => {
            if(!data) {
                return res.status(404).json({message: 'Invalid ID'})
            }
            res.status(204).json()
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request', err})
        })
}

module.exports = {
    getAllMovies,
    getMovieById,
    postNewMovie,
    patchMovie,
    deleteMovie
}
