module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: DataTypes.DECIMAL,
        awards: DataTypes.INTEGER,
        releaseDate: {
            type: DataTypes.DATE,
            field: 'release_date'
        },
        length: DataTypes.INTEGER,
        genreId: {
            type: DataTypes.INTEGER,
            field: 'genre_id'
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at'
        }
    }, {
        timestamps: true,
        tableName: 'movies'
    });

    Movie.associate = function(Models) {
        Movie.belongsTo(Models.Genre, {
            as: 'genre',
            foreignKey: 'genreId',
            targetKey: 'id' 
        })

        Movie.belongsToMany(Models.Actor, {
            as: 'actors',
            through: 'actor_movie',
            foreignKey: 'movie_id',
            otherKey: 'actor_id'
        })

        Movie.hasMany(Models.Actor, {
            foreignKey: 'favorite_movie_id',
            sourceKey: 'id',
            as: 'favoriteActors'
        });
    }

    return Movie;
};