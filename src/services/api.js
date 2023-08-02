import axios from "axios";

axios.defaults.baseURL = "https://64c3976967cfdca3b65ff3fb.mockapi.io";

export const fetchUsers = async ({ page, limit }) => {
  const { data } = await axios.get("/users", { params: { page, limit } });
  return data;
};

export const fetchFollowing = async (id, followers) => {
  const { data } = await axios.put(`/users/${id}`, followers);
  return data;
};
