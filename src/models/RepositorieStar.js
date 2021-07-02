const { Model, DataTypes } = require("sequelize")

class RepositorieStar extends Model{
    static init(sequelize){
        super.init({
            user_id: DataTypes.INTEGER,
            repositorie_id: DataTypes.INTEGER
        }, {
            tableName: "repositories_stars",
            sequelize
        })
    }
}

module.exports = RepositorieStar;