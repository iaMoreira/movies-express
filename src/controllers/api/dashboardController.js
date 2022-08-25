const { Movie, Actor } = require('../../database/models')

const dashboardController = {
    overview: async (req, res) => {
        const countMovies = await Movie.count();
        const countAwards = await Movie.sum('awards');
        const countActors = await Actor.count();

        return res.json({
            countMovies,
            countAwards,
            countActors
        });
    }
}

module.exports = dashboardController