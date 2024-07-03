import axios from "axios";

const moveiUrl = "https://api.themoviedb.org/3";

const api_key = "029484b23960c56df6f1d7896bf21408";
const ganeraMovies =
  "https://api.themoviedb.org/3/discover/movie?api_key=029484b23960c56df6f1d7896bf21408";

//https://api.themoviedb.org/3/trending/all/day?api_key=029484b23960c56df6f1d7896bf21408

const getTrendingVideos = axios.get(
  moveiUrl + "/trending/all/day?api_key=" + api_key
);

const getMoviesByGaneraId = (id) =>
  axios.get(ganeraMovies + "&with_genres=" + id);
export default {
  getTrendingVideos,
  getMoviesByGaneraId,
};
