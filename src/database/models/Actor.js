module.exports = (sequelize, DataTypes) => {
    const Actor = sequelize.define('Actor', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'first_name'
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'last_name'
        },
        rating: DataTypes.DECIMAL,
        favoriteMovieId: {
            type: DataTypes.INTEGER,
            field: 'favorite_movie_id'
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
        tableName: 'actors'
    });

    Actor.associate = (Models) => {
        Actor.hasOne(Models.Movie, {
            as: 'favoriteMovie',
            foreignKey: 'id',
            sourceKey: 'favoriteMovieId'
        })

        Actor.belongsToMany(Models.Movie, {
            as: 'movies',
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id'
        })
    }
    return Actor;
};