const express = require("express")
const connect = require("./src/connect")
const router=require("./src/router")
  

const app = express()

//meddel
app.use(express.json())
app.use(router)

connect()

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server is live on ${PORT} `)
} )