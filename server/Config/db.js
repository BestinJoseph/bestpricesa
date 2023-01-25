import mongoose from "mongoose"

const DB_PASSWORD = 'mypwd1234'
const DB_CLUSTER = 'bestprice'

const dbUrl = `mongodb+srv://bestin_38:${DB_PASSWORD}@cluster0.fm6rzs9.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', true)
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));

db.once("open", function () {
  console.log("Connected successfully");
});