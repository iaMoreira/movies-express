module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define('Genre', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ranking: DataTypes.INTEGER,
        active: DataTypes.BOOLEAN
    }, {
        timestamps: false,
        tableName: 'genres'
    });

    Genre.associate = (Models) => {
        Genre.hasMany(Models.Movie, {
            as: 'movies',
            foreignKey: 'genre_id',
            sourceKey: 'id'
        })
    } 

    return Genre;
};