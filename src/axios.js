import axios from "axios";

const instance = axios.create({
  baseURL: "https://git.heroku.com/whatsapp-deployed",
});

export default instance;
