const { Movie, Genre } = require('../../database/models');

const movieController = {
    index: async (req, res) => {
        const movies = await Movie.findAll();
        return res.json(movies);
    },
    show: async (req, res) => {
        const { id } = req.params
        const movie = await Movie.findByPk(id);
        return res.json(movie);
    },
}

module.exports = movieController;