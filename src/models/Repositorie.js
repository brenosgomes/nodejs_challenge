const { Model, DataTypes } = require("sequelize")

class Repositorie extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            user_id: DataTypes.INTEGER,
            description: DataTypes.STRING,
            public: DataTypes.BOOLEAN,
            slug: DataTypes.STRING,
        }, {
            tableName: "repositories",
            sequelize
        })
    }

    static associate (models){
        this.hasMany( models.RepositorieStar, {
            foreignKey: 'repositorie_id'
        }) 
    }
}

module.exports = Repositorie;