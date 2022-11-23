require("dotenv").config()
const { application } = require("express")
const express = require("express")
const connectDB = require("./db/connect")
const employeeRouter = require("./routes/employeeRoutes")
const app = express()

// middleware
app.use(express.json())

//routes
app.use("/api/v1/employees", employeeRouter)


app.get("/", (req, res) => {
  console.log(req.body)
  res.send("<h1>Welcome to this challenge Api </h1>")
  res.status(200)
})

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`)
    })
  } catch (err) {
    console.log(err)
  }
}

start()
