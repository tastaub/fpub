import axios from "axios";

export default {
  // Get Routes
  getFood: () => axios.get("/api/post/food"),
  getBeer: () => axios.get("/api/post/beer"),
  getEvents: () => axios.get("/api/post/events"),
  //Post Routes
  postFood: newFood => axios.post("/api/post/food", newFood),
  postBeer: newBeer => axios.post("/api/post/beer", newBeer),
  postEvents: newEvents => axios.post("/api/post/events", newEvents)
};
