

const express = require("express")

const pool = require("./db")

const app = express()

const productsRoutes = require("./routes/productsRoute")
 require("dotenv").config()
app.use(express.json())




pool.connect()
.then(() => {
    console.log("Database connectesd successfully")
})
.catch(error => {
    console.log("Error connecting toi the database", error.message)
})

app.use("/products", productsRoutes)




app.listen(process.env.PORT, () => {
    console.log(`Server runnin gon port:http://localhost:${process.env.PORT}`)
})
