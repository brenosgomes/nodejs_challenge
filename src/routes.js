const express = require("express");
const UserController = require("./controllers/UserController");
const FollowingController = require("./controllers/FollowingController");
const RepositorieController = require("./controllers/RepositorieController");
const RepositorieStarController = require("./controllers/RepositorieStarController");

const routes = express.Router();

routes.get("/users", UserController.get)
routes.post("/users", UserController.post)
routes.get("/user", UserController.getById)
routes.delete("/users/:id", UserController.delete)
routes.put("/users/:id", UserController.put)

routes.get("/follow", FollowingController.get)
routes.post("/follow", FollowingController.post)
routes.get("/follow/:id", FollowingController.getById)
routes.delete("/follow/:id", FollowingController.delete)

routes.get("/repositorie", RepositorieController.get)
routes.post("/repositorie", RepositorieController.post)
routes.get("/repositorie/:id", RepositorieController.getById)
routes.delete("/repositorie/:id", RepositorieController.delete)
routes.put("/repositorie/:id", RepositorieController.put)

routes.get("/repositorie_star", RepositorieStarController.get)
routes.post("/repositorie_star", RepositorieStarController.post)
routes.get("/repositorie_star/:id", RepositorieStarController.getById)
routes.delete("/repositorie_star/:id", RepositorieStarController.delete)

module.exports = routes;