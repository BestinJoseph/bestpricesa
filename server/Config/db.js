import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

const dbUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.fm6rzs9.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`

mongoose.set('strictQuery', true)
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));

db.once("open", function () {
  console.log("Connected successfully");
});
