import axios from "axios";

export default {
  getFood: axios
    .get("/api/food")
    .then(data => console.log(data))
    .catch(err => console.log(err)),

  getDrinks: axios
  .get("/api/drinks")
  .then(data => console.log(data))
  .catch(err => console.log(err)),

  getEvents: axios
  .get("api/events")
  .then(data => console.log(data))
  .catch(err => console.log(err))
  
};


