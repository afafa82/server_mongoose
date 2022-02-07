const express = require("express");
const mongoose = require("mongoose");

const server = express();

const restaurantsRouter = require("./routers/restaurantsRouter");

mongoose.connect(
  "mongodb+srv://YI:n9wpsYMVR03sybys@cluster0.brjrk.mongodb.net/restaurants_app",
  (err) => {
    if (err) {
      console.error(err);
    }
    console.log("Connection to database established.");

    server.get("/", (req, res) => {
      res.send({
        message: "Server up and running!",
      });
    });

    server.use("/restaurants", restaurantsRouter);

    server.listen(3000, () => {
      console.log("Server running on port: 3000");
    });
  }
);
