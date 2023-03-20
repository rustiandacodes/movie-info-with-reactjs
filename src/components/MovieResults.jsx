import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import ActionType from '../redux/globalActionType'
import posterBroken from '../errors/poster-broken.png'

const MovieResults = (props) => {
  const [num, setNum] = useState(1)
  const navigate = useNavigate()
  const numberForPages = []

  const totalPage = props.movieResults.length / 20

  const handleNavigate = (id) => {
    navigate(`/detailmovie/${id}`)
  }

  // number for pagination
  for (let i = 1; i < totalPage; i++) {
    numberForPages.push(i)
  }

  // show movies by page
  const thisPage = (page) => {
    if (page === 1) {
      const movies = props.movieResults.slice(0, 20)
      props.handleMoviePerPage(movies)
    } else {
      const movies = props.movieResults.slice(page * 20, page * 20 + 20)
      props.handleMoviePerPage(movies)
    }
  }

  // console log here
  console.log(totalPage)

  return (
    <div className="md:my-10 md:px-10">
      <p className="title">Results</p>
      <div className="container mx-auto flex flex-wrap justify-between">
        {props.moviePerPage.map((movie, index) => {
          const imageBroken = () => {
            if (movie.poster_path) {
              return `${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`
            } else {
              return posterBroken
            }
          }
          return (
            <div
              className="w-1/2 lg:w-1/5 md:w-1/4 sm:w-1/3 p-2 cursor-pointer overflow-hidden md:hover:scale-110 hover:duration-300 hover:z-40 group relative"
              key={index}
              onClick={() => {
                handleNavigate(movie.id)
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
              <div className="hidden md:block md:show-card">
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
        <div
          className={`${
            totalPage < 1 ? 'hidden' : 'block'
          } container mx-auto flex justify-center gap-5`}
        >
          {numberForPages.map((number) => {
            return (
              <div
                className={`${
                  props.pageNumber === number ? 'bg-black-for-content' : ''
                } my-16 text-white shadow w-10 h-10 flex justify-center items-center cursor-pointer bg-black-for-card rounded-md`}
                key={number}
                onClick={() => {
                  props.handlePageNumber(number)
                  thisPage(number)
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
    moviePerPage: state.moviePerPage,
    pageNumber: state.pageNumber,
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
    handleMoviePerPage: (results) =>
      dispatch({
        type: ActionType.ADD_MOVIE_PER_PAGE,
        moviePerPage: results,
      }),
    handlePageNumber: (results) =>
      dispatch({
        type: ActionType.CHANGE_PAGE_NUMBER,
        pageNumber: results,
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieResults)
