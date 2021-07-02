const express = require("express")
const app = express()
const consign = require("consign")
const middleware = require("./config/middleware")
const cors = require('cors');
const routes = require("./routes")
require("./database")

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors(/* corsOptions */))
app.use(routes)

app.listen(PORT, () =>{
    console.log("Backend executando na porta "+ PORT)
})