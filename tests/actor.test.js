const { Actor } = require('../src/database/models');

async function getActors() {
    const actors = await Actor.findAll();

    actors.forEach(actor => 
        console.log(`
            ID: ${actor.id}
            Nome: ${actor.firstName} ${actor.lastName}
            MovieTitle: ${(actor.movie ? actor.movie.title : '')}
        `)
    );

}

async function getActor(id) {
    const actor = await Actor.findByPk(id, {
        include: ['favoriteMovie', 'movies']
    });
    console.log(`
        ID: ${actor.id}
        Nome: ${actor.firstName} ${actor.lastName}
        FavoriteMovieID: ${actor.favoriteMovieId}
        MovieTitle: ${(actor.favoriteMovie ? actor.favoriteMovie.title : 'Filme não encontrado')}
    `)

    console.log('--------------------------------')
    if (actor.movies.length == 0) {
        console.log('No Movies found');
    } else {
        actor.movies.forEach(movie => console.log(movie.title));
    }
}
// getActors();
getActor(5)