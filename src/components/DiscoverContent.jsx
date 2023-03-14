import { AiFillStar } from 'react-icons/ai'
import posterBroken from '../errors/poster-broken.png'

import { connect } from 'react-redux'
import ActionType from '../redux/globalActionType'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const DiscoverContent = (props) => {
  const [movies, setMovies] = useState(props.discover)
  const navigate = useNavigate()
  const genres = props.genres

  const handleNavigate = (id = props.detailMovie.id) => {
    navigate(`/detailmovie/${id}`)
  }

  const movieByGenre = props.discover.filter(
    (movie) =>
      movie.genre_ids[0] === props.selectedGenre.id ||
      movie.genre_ids[1] === props.selectedGenre.id ||
      movie.genre_ids[2] === props.selectedGenre.id ||
      movie.genre_ids[3] === props.selectedGenre.id ||
      movie.genre_ids[4] === props.selectedGenre.id,
  )

  useEffect(() => {
    setMovies(movieByGenre)
  }, [movieByGenre])

  return (
    <div className="md:my-10 md:px-10 px-5">
      <div className="container mx-auto flex gap-2 flex-wrap justify-center pt-5">
        <div
          className={`${
            props.selectedGenre === 'All'
              ? 'border-white text-black-for-content bg-white'
              : 'border-slate-400'
          } mr-1 px-2 py-1 rounded-xl cursor-pointer text-sm border-[2px] hover:border-white hover:text-black-for-content hover:bg-white`}
          onClick={() => {
            props.handleSelectedGenre('All')
            setMovies(props.discover)
          }}
        >
          All
        </div>
        {genres.map((genre) => {
          return (
            <div
              className={`${
                props.selectedGenre.name === genre.name
                  ? 'border-white text-black-for-content bg-white'
                  : 'border-slate-400'
              } mr-1 px-2 py-1 rounded-xl cursor-pointer text-sm border-[2px] hover:border-white hover:text-black-for-content hover:bg-white`}
              key={genre.id}
              onClick={() => {
                props.handleSelectedGenre(genre)
                setMovies(movieByGenre)
              }}
            >
              {genre.name}
            </div>
          )
        })}
      </div>
      <p className="title">Discover</p>
      <div className="container mx-auto flex flex-wrap justify-center">
        {movies.map((movie) => {
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
                <h4 className="truncate font-semibold md:text-lg text-md">
                  {movie.title}
                </h4>
                <p className="my-1 text-xs">{movie.release_date}</p>
                <p className="text-xs max-h-24 overflow-hidden">
                  {movie.overview}
                </p>
                <p>...</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    genres: state.genres,
    discover: state.discover,
    selectedGenre: state.selectedGenre,
    detailMovie: state.detailMovie,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectedGenre: (genre) =>
      dispatch({ type: ActionType.ADD_DETAIL_GENRE, selectedGenre: genre }),
    handleMovie: (detailMovie) =>
      dispatch({ type: ActionType.ADD_DETAIL_MOVIE, detailMovie: detailMovie }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverContent)
