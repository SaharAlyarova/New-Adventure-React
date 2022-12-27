import axios from "axios";
const BASE_URL = "https://northwind.vercel.app/api/";



export const addNewCustomer = async (obj) => {
    try {
      let response = await axios.post(`${BASE_URL}customers`, obj);
      return response.data;
    } catch (error) {
      throw error;
    }
  };