import axios from "axios";

export const getPostsApiAllCategory = async () => {
  let res = await axios.get(`http://localhost:3001/Cars`);
  // console.log("Car  data", res);
  return res.data;
};
export const getPostsApiCars = async () => {
  let res = await axios.get(`http://localhost:3001/Cars'`);
  return res.data;
};

export const getPostsApiBikes = async () => {
  let res = await axios.get(`http://localhost:3001/Bikes`);
  return res.data;
};

export const getPostsApiMobiles = async () => {
  let res = await axios.get(`http://localhost:3001/Mobiless`);
  return res.data;
};

export const getPostsApiHouse = async () => {
  let res = await axios.get(`http://localhost:3001/House_And_Apartment`);
  return res.data;
};
