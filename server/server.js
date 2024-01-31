const express = require("express");
const cors = require("cors")
const app = express();
const mongoose = require("mongoose");
const recordRoute = require("./routes/record");
const Record = require("./models/Record");
const router = require("express").Router();
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const xlsx = require('node-xlsx');
const dotenv = require("dotenv");
const fs = require('fs');
dotenv.config();



app.use(cors());
app.use(express.json());

app.use("/api/upload", recordRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
})

mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(10000 ,  (req, res) => {
    console.log("Server is running");
  })
}).catch(err => console.log(err))
