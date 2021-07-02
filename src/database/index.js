const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const connection = new Sequelize(dbConfig);

const User = require("../models/User");
const Follower = require("../models/Follower");
const Following = require("../models/Following");
const Repositorie = require("../models/Repositorie");
const RepositorieStar = require("../models/RepositorieStar");

const models = [User, Follower, Following, Repositorie, RepositorieStar];

models
    .map(model => model.init(connection))
    //.map(model => model.associate && model.associate(connection.models));

    User.associate(connection.models)
    Repositorie.associate(connection.models)

module.exports = connection;