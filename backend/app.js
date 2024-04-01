const express = require("express");
const cookieParser=require('cookie-parser');


const app = express();

if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").config({ path: "Backend/config/config.env" });

  //using middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  //importing routes
const postRoutes = require("./routes/post");
const userRoutes = require("./routes/user");0


//using routes
app.use("/api/v1", postRoutes);
app.use("/api/v1", userRoutes);

module.exports = app;
