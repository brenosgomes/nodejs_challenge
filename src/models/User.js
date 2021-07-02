const { Model, DataTypes } = require("sequelize");

class User extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            localization: DataTypes.STRING,
            avatar: DataTypes.STRING,
            username:DataTypes.STRING,
            bio: DataTypes.STRING
        }, {
            tableName: "users",
            sequelize
        });
    }

    static associate (models){
        this.hasMany( models.Repositorie , {
            foreignKey: 'user_id'
        })

        this.hasMany( models.Follower, {
            foreignKey: 'user_id'
        }) 

        this.hasMany( models.Following, {
            foreignKey: 'user_id'
        }) 

        this.hasMany( models.RepositorieStar, {
            foreignKey: 'user_id'
        }) 
    }
}

module.exports = User;