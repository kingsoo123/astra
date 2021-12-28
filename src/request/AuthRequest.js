import axios from "axios";
import config from "../config";



const baseURL = config().secrets.apiHost;



export const login = async (data) => {
    const response = await axios.post(`${baseURL}/auth/login`, data);
      return response;
  };