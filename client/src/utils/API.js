import axios from "axios";

export default {
  register: admin => axios.post("/api/admin/register", admin),

  login: admin => axios.post("/api/admin/login", admin),

  setHeaderToken: token =>
    (axios.defaults.headers.common["Authorization"] = token)
};
