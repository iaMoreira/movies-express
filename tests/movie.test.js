const { Movie } = require('../src/database/models');
const { Op } = require("sequelize");

async function getMovies() {
    const movies = await Movie.findAll({
        where: { 
            // title: { 
            //     [Op.like]: 'Harry Potter%'
            // },
            genreId: [1, 3, 8]
        },
        order: [
            ['title', 'ASC']
        ],
        limit: 2,
    });


    movies.forEach(movie => console.log('Movie: ' + movie.genreId + ' - ' + movie.releaseDate.toLocaleDateString('pt-BR') + ' - ' + movie.title ));
}


async function getOneMovie(id) {
    const movie = await Movie.findByPk(id, { include: ['genre', 'actors']});
    if (!movie) {
        throw new Error('Movie not found');
    }
    console.log(`
        Title: ${movie.title}
        Genre: ${movie.genre.name}
    `);

    console.log('--------------------------------')
    if (movie.actors.length == 0) {
        console.log('No actors found');
    } else {
        movie.actors.forEach(actor => console.log(actor.firstName + ' ' + actor.lastName));
    }
    return movie;
}

getOneMovie(1)