
const express = require("express")
const proxy   = require("express-http-proxy")


const app  = express()
require("dotenv").config()

app.use(express.json())

app.use("/products", proxy(
    process.env.PRODUCTS_URL, {
        proxyReqPathResolver:(req) => req.originalUrl
    }
))