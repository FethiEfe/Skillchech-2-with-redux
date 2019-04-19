require("dotenv").config();
const express = require("express");
const massive = require("massive")
const {getAll, postProduct,updatePost} = require("./controller")

const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance)
    console.log('Database Connected');
})

app.use(express.json())

app.get("/api/products", getAll)
app.post("/api/add", postProduct)
app.put("/api/products/:id", updatePost)


app.listen(SERVER_PORT, () => {
    console.log(`I am listening on ${SERVER_PORT}`)
})

