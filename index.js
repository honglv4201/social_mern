const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
dotenv.config();

const app = express();

//middle ware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//connect db
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("db connected");
});

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.listen(process.env.PORT, () => {
  console.log(`server is running in port : ${process.env.PORT}`);
});
