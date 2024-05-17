import axios from "axios";
import { BASE_URL } from "./url";

// function for get all products

async function getAllProducts(endpoint) {
  let response = await axios.get(`${BASE_URL}/${endpoint}`);
  return response.data;
}
export default getAllProducts;
