const express = require("express");
const router = express.Router();

const Beer = require("../../models/Beer");
const Food = require("../../models/Food");
const Events = require("../../models/Events");

// @route GET api/post/getbeer
// @desc Get all beers in db
// @access Public
router.get("/beer", (req, res) => {
  Beer.find({}, (err, response) => {
    if (err) {
      res.json(err);
    }
    res.json(response);
  });
});

// @route GET api/post/getbeer
// @desc Get all beers in db
// @access Public
router.post("/beer", (req, res) => {
  let newBeer = req.body;
  console.log(newBeer);
  Beer.create(newBeer).then(data => res.json(data));
});

// @route GET api/post/getbeer
// @desc Get all beers in db
// @access Public
router.post("/beer/:id", (req, res) => {
  let newBeer = req.body;
  let id = req.params.id;
  console.log(newFood);
  Beer.findByIdAndUpdate(id, newBeer, { new: true }, (err, response) => {
    if (err) {
      res.json(err);
    }
    res.json(response);
  });
});

// @route GET api/post/getbeer
// @desc Get all beers in db
// @access Public
router.delete("/beer/:id", (req, res) => {
  let id = req.params.id;
  Beer.findByIdAndRemove(id).then(data => res.json(data));
});

// @route GET api/post/getfood
// @desc Get all food in db
// @access Public
router.get("/food", (req, res) => {
  Food.find({}, (err, response) => {
    if (err) {
      res.json(err);
    }
    res.json(response);
  });
});

// @route GET api/post/getbeer
// @desc Get all beers in db
// @access Public
router.post("/food", (req, res) => {
  let newFood = req.body;
  console.log(newFood);
  Food.create(newFood).then(data => res.json(data));
});

// @route GET api/post/getbeer
// @desc Get all beers in db
// @access Public
router.post("/food/:id", (req, res) => {
  let newFood = req.body;
  let id = req.params.id;
  console.log(newFood);
  Food.findByIdAndUpdate(id, newFood, { new: true }, (err, response) => {
    if (err) {
      res.json(err);
    }
    res.json(response);
  });
});

// @route GET api/post/getbeer
// @desc Get all beers in db
// @access Public
router.delete("/food/:id", (req, res) => {
  let id = req.params.id;
  Food.findByIdAndRemove(id).then(data => res.json(data));
});

// @route GET api/post/events
// @desc Get all events in db
// @access Public
router.get("/events", (req, res) => {
  Events.find({}, (err, response) => {
    if (err) {
      res.json(err);
    }
    res.json(response);
  });
});

// @route POST api/post/events
// @desc Post new events
// @access Public
router.post("/events", (req, res) => {
  let newEvents = req.body;
  console.log(newEvents);
  Events.create(newEvents).then(data => res.json(data));
});

// @route GET api/post/getbeer
// @desc Get all beers in db
// @access Public
router.post("/events/:id", (req, res) => {
  let newEvents = req.body;
  let id = req.params.id;
  console.log(newEvents);
  Events.findByIdAndUpdate(id, newEvents, { new: true }, (err, response) => {
    if (err) {
      res.json(err);
    }
    res.json(response);
  });
});

// @route GET api/post/getbeer
// @desc Get all beers in db
// @access Public
router.delete("/events/:id", (req, res) => {
  let id = req.params.id;
  Events.findByIdAndRemove(id).then(data => res.json(data));
});
module.exports = router;
