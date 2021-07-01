const { Model, DataTypes } = require("sequelize")

class Follow extends Model{
    static init(sequelize){
        super.init({
            follower: DataTypes.INTEGER,
            following: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
}

module.exports = Follow;