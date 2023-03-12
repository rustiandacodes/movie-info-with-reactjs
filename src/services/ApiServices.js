import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_APIKEY

// get popular movie list from api
export const getPopularMovieList = async () => {
  const movies = await axios.get(
    `${baseUrl}/movie/popular/?page=1%&api_key=${apiKey}`,
  )
  return movies.data.results
}

// get now playing in theater movie list from api
export const getNowPlaying = async () => {
  const nowPlaying = await axios.get(
    `${baseUrl}/movie/now_playing/?page=1%&api_key=${apiKey}`,
  )
  return nowPlaying.data.results
}

// get trending movie list from api
export const getTrendingMovies = async (page) => {
  const trendingMovies = await axios.get(
    `${baseUrl}/trending/movie/day?page=${page}&api_key=${apiKey}`,
  )
  return trendingMovies.data.results
}

// get search movie list from api
export const searchMovie = async (page, keyword) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${keyword}&page=${page}&api_key=${apiKey}`,
  )
  return search.data
}

// get genres list from api
export const getGenres = async () => {
  const genres = await axios.get(
    `${baseUrl}/genre/movie/list?api_key=${apiKey}`,
  )
  return genres.data
}

// get movie discover
export const getMovieDiscover = async (page = 1) => {
  const discover = await axios.get(
    `${baseUrl}/discover/movie?api_key=${apiKey}&page=${page}`,
  )
  return discover.data.results
}

// get trailer movie
export const getTrailer = async (id) => {
  const trailer = await axios.get(
    `${baseUrl}/movie/${id}/videos?api_key=${apiKey}&append_to_response=videos`,
  )

  return trailer
}
