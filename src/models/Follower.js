const { Model, DataTypes } = require("sequelize")

class Follower extends Model{
    static init(sequelize){
        super.init({
            follower: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
        }, {
            tableName: "follower",
            sequelize
        })       
        
    }
}

module.exports = Follower;