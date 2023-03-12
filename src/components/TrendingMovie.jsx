import { useEffect, useState } from 'react'
import { getTrendingMovies } from '../services/ApiServices'
import { AiFillStar } from 'react-icons/ai'

const TrendingMovies = (props) => {
  const [movies, setMovies] = useState([])
  const [num, setNum] = useState(1)
  const numberForPages = []

  // number for pages value
  for (let i = 1; i < 6; i++) {
    numberForPages.push(i)
  }

  // get Trending Movies
  useEffect(() => {
    getTrendingMovies(1).then((result) => {
      setMovies(result)
    })
  }, [])

  const thisPage = async (page) => {
    await getTrendingMovies(page).then((result) => {
      setMovies(result)
    })
  }

  return (
    <div className="md:my-10 md:px-10 px-5">
      <p className="mb-5 font-semibold">On Trending</p>
      <div className="container mx-auto flex flex-wrap justify-between">
        {movies.map((movie) => {
          return (
            <div
              className="w-1/2 lg:w-1/5 md:w-1/4 sm:w-1/3 p-2 cursor-pointer overflow-hidden hover:scale-110 hover:duration-300 hover:z-40 group relative"
              key={movie.id}
            >
              <div className="absolute right-3 p-2 flex gap-1 items-center">
                <AiFillStar className="text-yellow-500 shadow-lg" />
                <span className="text-white">{movie.vote_average}</span>
              </div>
              <img
                src={`${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`}
                alt={movie.title}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute text-white bottom-0 right-0 left-0 h-[80%] rounded-lg p-3 m-2 bg-gradient-to-t from-black to-black-for-card opacity-80 overflow-hidden translate-y-72 group-hover:-translate-y-0 group-hover:block group-hover:transition group-hover:duration-300 group-hover:ease-in-out">
                <h4 className="truncate font-semibold text-lg">
                  {movie.title}
                </h4>
                <p className="my-1 text-xs">{movie.release_date}</p>
                <p className="my-1 text-xs">{movie.genres_id}</p>
                <p className="text-xs max-h-24 overflow-hidden">
                  {movie.overview}
                </p>
                <p>...</p>
              </div>
            </div>
          )
        })}
        <div className="contaner mx-auto flex justify-center gap-5">
          {numberForPages.map((number, index) => {
            return (
              <div
                className={`${
                  num === number ? 'bg-black-for-content' : ''
                } my-16 text-white shadow w-10 h-10 flex justify-center items-center cursor-pointer bg-black-for-card rounded-md`}
                key={number}
                onClick={() => {
                  thisPage(number)
                  setNum(number)
                }}
              >
                <p>{number}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TrendingMovies
