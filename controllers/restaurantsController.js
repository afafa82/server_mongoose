const Restaurant = require("../models/Restaurant");

module.exports = {
  getAllRestaurants: (req, res) => {
    Restaurant.find({})
      .exec()
      .then((docs) => {
        res.send({
          restaurants: docs,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(400).send({
          err: err.message,
        });
      });
  },
  getSortedRestaurants: (req, res) => {
    const sortBy = req.query.sortBy || "desc";

    Restaurant.find({})
      .sort({
        restaurant_id: sortBy.toLowerCase() === "desc" ? -1 : 1,
      })
      .exec()
      .then((docs) => {
        res.send({
          restaurants: docs,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(400).send({
          err: err.message,
        });
      });
  },
  getRestaurantsByCuisine: (req, res) => {
    const cuisineName = req.params.cuisineName;
    Restaurant.find({
      cuisine: cuisineName,
    })
      .exec()
      .then((docs) => {
        res.send({
          restaurants: docs,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(400).send({
          err: err.message,
        });
      });
  },
  getRestaurantsByDelicatessen: (req, res) => {
    Restaurant.find({
      cuisine: "Delicatessen",
      city: {
        $ne: "Brooklyn",
      },
    })
      .exec()
      .then((docs) => {
        res.send({
          restaurants: docs,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(400).send({
          err: err.message,
        });
      });
  },
};
