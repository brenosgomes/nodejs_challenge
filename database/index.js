const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Follow = require("../models/Follow");
const Repositorie = require("../models/Repositorie");
const RepositorieStar = require("../models/RepositorieStar");

const connection = new Sequelize(dbConfig);

User.init(connection);
Follow.init(connection);
Repositorie.init(connection);
RepositorieStar.init(connection);

module.exports = connection;