const { Model, DataTypes } = require("sequelize")

class Following extends Model{
    static init(sequelize){
        super.init({
            following: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
        }, {
            tableName: "following",
            sequelize
        })       
        
    }
}

module.exports = Following;