const express = require("express")
const app = express()
const cors = require('cors');
const routes = require("../routes")

module.exports = app => {
    app.use(express.json())
    app.use(cors(/* corsOptions */))
    app.use(routes)
}