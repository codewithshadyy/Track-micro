

const express = require("express")

const pool = require("./db")


pool.connect()
.then(() => {
    console.log("Database connectesd successfully")
})
.catch(error => {
    console.log("Error connecting toi the database", error.message)
})