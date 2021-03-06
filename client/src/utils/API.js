import axios from "axios";

export default {
  // Get Routes
  getFood: () => axios.get("/api/post/food"),
  getBeer: () => axios.get("/api/post/beer"),
  getEvents: () => axios.get("/api/post/events"),
  //Post Routes
  postFood: newFood => axios.post("/api/post/food", newFood),
  postBeer: newBeer => axios.post("/api/post/beer", newBeer),
  postEvents: newEvents => axios.post("/api/post/events", newEvents),
  //Delete Routes
  deleteFood: foodId => axios.delete("/api/post/food/" + foodId),
  deleteBeer: beerId => axios.delete("/api/post/beer/" + beerId),
  deleteEvents: eventsId => axios.delete("/api/post/events/" + eventsId),

  //Edit Routes
  editFood: (foodId, newFood) =>
    axios.post("/api/post/food/" + foodId, newFood),
  editBeer: (beerId, newBeer) =>
    axios.post("/api/post/beer/" + beerId, newBeer),
  editEvents: (eventsId, newEvents) =>
    axios.post("/api/post/events/" + eventsId, newEvents)
};
