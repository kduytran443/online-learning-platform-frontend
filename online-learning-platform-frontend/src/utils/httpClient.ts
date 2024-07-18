import axios from "axios";
import { getApiUrl } from "./pathUtils";

export const axiosClient = axios.create({
  baseURL: getApiUrl(),
  headers: {
    "content-type": "application/json"
  }
});
