import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import ActionType from '../redux/globalActionType'

import { searchMovie } from '../services/ApiServices'

import posterBroken from '../errors/poster-broken.png'

const MovieResults = (props) => {
  const [num, setNum] = useState(1)
  const navigate = useNavigate()
  const numberForPages = []

  const handleNavigate = (id = props.detailMovie.id) => {
    navigate(`/detailmovie/${id}`)
  }

  // number for pages value
  for (let i = 1; i < 6; i++) {
    numberForPages.push(i)
  }

  const thisPage = async (page, keyword) => {
    const query = await searchMovie(page, keyword)
    return props.handleMovieResults(query.results)
  }

  return (
    <div className="md:my-10 md:px-10">
      <p className="title">Results</p>
      <div className="container mx-auto flex flex-wrap justify-between">
        {props.movieResults.map((movie) => {
          const imageBroken = () => {
            if (movie.poster_path) {
              return `${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`
            } else {
              return posterBroken
            }
          }
          return (
            <div
              className="w-1/2 lg:w-1/5 md:w-1/4 sm:w-1/3 p-2 cursor-pointer overflow-hidden hover:scale-110 hover:duration-300 hover:z-40 group relative"
              key={movie.id}
              onClick={() => {
                props.handleMovie(movie)
                handleNavigate()
              }}
            >
              <div className="absolute right-3 p-2 flex gap-1 items-center">
                <AiFillStar className="text-yellow-500 shadow-lg" />
                <span className="text-white">{movie.vote_average}</span>
              </div>
              <img
                src={imageBroken()}
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
          {numberForPages.map((number) => {
            return (
              <div
                className={`${
                  num === number ? 'bg-black-for-content' : ''
                } my-16 text-white shadow w-10 h-10 flex justify-center items-center cursor-pointer bg-black-for-card rounded-md`}
                key={number}
                onClick={() => {
                  setNum(number)
                  thisPage(number, props.keyword)
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

const mapStateToProps = (state) => {
  return {
    detailMovie: state.detailMovie,
    movieResults: state.movieResults,
    keyword: state.keyword,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleMovie: (detailMovie) =>
      dispatch({ type: ActionType.ADD_DETAIL_MOVIE, detailMovie: detailMovie }),
    handleMovieResults: (results) =>
      dispatch({
        type: ActionType.ADD_MOVIE_RESULTS,
        movieResults: results,
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieResults)
