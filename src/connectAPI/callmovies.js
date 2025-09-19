import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

export default instance;


export const getmoviess = async () => {
 
  const response = await axios.get("/movies");
  return response.data;
};

// Insertmovies()
export const insertmovies = async (moviesData) => {
  try {
    const res = await axios.post("/movies", moviesData); //  ใช้ path ตรง ๆ
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const updatemovies = async (id, moviesData) => {
  const res = await axios.put(`/movies/${id}`, moviesData);
  return res.data;
};

export const deletemovies = async (id) => {
  const res = await axios.delete(`/movies/${id}`);
  return res.data;
};




