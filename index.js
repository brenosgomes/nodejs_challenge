const express = require("express")
const app = express()
const consign = require("consign")

const PORT = process.env.PORT || 5000

/* consign()
    .include('./config/passport.js')
    .then("./config/middleware.js")
    .then("./api/validator.js")
    .then("./api")
    .then("./config/routes.js")
    .into(app) */

app.listen(PORT, () =>{
    console.log("Backend executando na porta "+ PORT + "＼(ﾟｰﾟ＼)")
})