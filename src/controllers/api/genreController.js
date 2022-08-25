const { Genre } = require('../../database/models');

const genreController = {
    index: async (req, res) => {
        const genres = await Genre.findAll()
            
        return res.json(genres);
    },
    show: async  (req, res) => {
        const genre = await Genre.findByPk(req.params.id)
        return res.json(genre);
    }

}

module.exports = genreController;