import axios from "axios";

export default class CarService {
  async getAll() {
    let response = await axios.get("https://localhost:7050/details");
    return response.data;
  }
}
