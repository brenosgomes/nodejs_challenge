const express = require("express");
const UserController = require("./controllers/UserController");

const routes = express.Router();

routes.get("/users", UserController.get)
routes.delete("/users/:id", UserController.delete)
routes.post("/users", UserController.post)
routes.put("/users/:id", UserController.put)


module.exports = routes;