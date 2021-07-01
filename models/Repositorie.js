const { Model, DataTypes } = require("sequelize")

class Repositorie extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            public: DataTypes.BOOLEAN,
            slug: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Repositorie;