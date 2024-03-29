// Import anchor componets from react-router-dom
import { NavLink } from 'react-router-dom'

// import icons from react-icons
import { RxHamburgerMenu } from 'react-icons/rx'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'

// import image errors
import backdropBroken from '../errors/backdrop-broken.png'

// import hook
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// import services api method
import { searchMovie } from '../services/ApiServices'

// import state management connect
import { connect } from 'react-redux'
import ActionType from '../redux/globalActionType'

// main components
const Navbar = (props) => {
  const [closeSearch, setCloseSearch] = useState(false)
  const [localKeyword, setLocalKeyword] = useState('')
  const [movies, setMovies] = useState([])
  const [movies2, setMovies2] = useState([])
  const [movies3, setMovies3] = useState([])
  const [movies4, setMovies4] = useState([])
  const [movies5, setMovies5] = useState([])
  const [onlyFiveMovie, setOnlyFiveMovie] = useState([])
  const navigate = useNavigate()

  const search = async (q) => {
    if (q.length > 3) {
      const movie = await searchMovie(1, q)
      setMovies(movie.results)
      props.handleMoviePerPage(movie.results)
      const movie2 = await searchMovie(2, q)
      setMovies2(movie2.results)
      const movie3 = await searchMovie(3, q)
      setMovies3(movie3.results)
      const movie4 = await searchMovie(4, q)
      setMovies4(movie4.results)
      const movie5 = await searchMovie(5, q)
      setMovies5(movie5.results)
    }
    const movieAll = [].concat(movies, movies2, movies3, movies4, movies5)
    setMovies(movieAll)

    const getFiveMovie = movies.splice(0, 5)
    setOnlyFiveMovie(getFiveMovie)
  }

  const handleNavigate = (id = props.detailMovie.id) => {
    navigate(`/detailmovie/${id}`)
  }

  const handleNavigateToResults = () => {
    navigate('/results')
  }

  return (
    <div className="container mx-auto flex gap-5 items-center justify-between py-3 md:px-8">
      {/* navbar on mobile */}
      <RxHamburgerMenu
        className="text-2xl cursor-pointer md:hidden"
        onClick={props.handleNavsideTrue}
      />
      <div className="text-center flex-row justify-center md:hidden">
        <h4 className="uppercase font-extrabold text-white text-xl md:text-2xl">
          rustianda
        </h4>
        <h4 className="uppercase font-extrabold text-red-600 text-xl md:text-2xl">
          movies
        </h4>
      </div>
      <FiSearch
        className="text-2xl cursor-pointer md:hidden"
        onClick={() => setCloseSearch(true)}
      />

      {/* --- onclick search icon */}
      <div
        className={`${
          closeSearch === false ? 'hidden' : ''
        } absolute p-7 top-0 left-0 w-full z-[99] h-full md:hidden`}
      >
        <div className="bg-black-for-content opacity-90 w-screen h-screen -z-[90] absolute left-0"></div>
        <div className="flex items-center gap-3   mx-auto">
          <AiOutlineArrowLeft
            className="text-2xl cursor-pointer font-bold"
            onClick={() => {
              setCloseSearch(false)
            }}
          />
          <div className="px-5 py-3 bg-black-for-content shadow rounded-lg flex justify-between w-full relative">
            <input
              type="text"
              className="bg-black-for-content w-full outline-none text-sm "
              placeholder="search any movie here ..."
              value={localKeyword}
              onChange={({ target }) => {
                search(target.value)
                props.handleKeyword(target.value)
                setLocalKeyword(target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  props.handleKeyword(localKeyword)
                  props.handleMovieResults(movies)
                  props.handlePageNumber(1)
                  handleNavigateToResults()
                  setLocalKeyword('')
                }
              }}
            />
            <IoMdClose
              className={`${
                localKeyword ? 'block' : 'hidden'
              } text-2xl ml-5 cursor-pointer`}
              onClick={() => setLocalKeyword('')}
            />
            <div
              className={`${
                localKeyword.length > 3 ? 'block' : 'hidden'
              } bg-black-for-content shadow rounded-b-lg absolute w-full left-0 top-[110%] z-[99] `}
            >
              <div className="p-2">
                {onlyFiveMovie.map((movie) => {
                  const imageBroken = () => {
                    if (movie.backdrop_path) {
                      return `${process.env.REACT_APP_BASEIMGURL}${movie.backdrop_path}`
                    } else {
                      return backdropBroken
                    }
                  }
                  return (
                    <div
                      className="flex items-center gap-5 group mb-4 cursor-pointer"
                      key={movie.id}
                      onClick={() => {
                        props.handleMovie(movie)
                        handleNavigate()
                        setLocalKeyword('')
                      }}
                    >
                      <img
                        src={imageBroken()}
                        alt={movie.title}
                        className="w-16 rounded-md"
                      />
                      <p className="p-3 text-sm truncate group-hover:text-white">
                        {movie.title}
                      </p>
                    </div>
                  )
                })}
              </div>

              <div
                className="px-2 pb-2 group"
                onClick={() => {
                  props.handleMovieResults(movies)
                  props.handlePageNumber(1)
                  setCloseSearch(false)
                  handleNavigateToResults()
                  setLocalKeyword('')
                }}
              >
                <p
                  className={`${
                    props.keyword.length < 4 ? 'hidden' : 'block'
                  } text-center group-hover:text-white p-2 rounded-lg bg-black-for-card cursor-pointer`}
                >
                  see more result...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end navbar on mobile */}

      {/* navbar on desktop */}
      <div className="px-5 py-3 shadow rounded-lg  hidden md:flex justify-between lg:w-1/2 ml-32 relative">
        <input
          type="text"
          className="bg-black-for-content w-full outline-none"
          placeholder="search any movie here ..."
          value={localKeyword}
          onChange={({ target }) => {
            search(target.value)
            props.handleKeyword(target.value)
            setLocalKeyword(target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              props.handleKeyword(localKeyword)
              props.handleMovieResults(movies)
              props.handlePageNumber(1)
              handleNavigateToResults()
              setLocalKeyword('')
            }
          }}
        />
        <IoMdClose
          className={`${
            localKeyword ? 'block' : 'hidden'
          } text-2xl mx-5 cursor-pointer`}
          onClick={() => setLocalKeyword('')}
        />
        <FiSearch className="text-2xl" />
        {/* on search */}
        <div
          className={`${
            localKeyword.length > 3 ? 'block' : 'hidden'
          } bg-black-for-content shadow rounded-b-lg absolute w-full left-0 top-[120%] z-[99] `}
        >
          <div className="p-2">
            {onlyFiveMovie.map((movie) => {
              const imageBroken = () => {
                if (movie.backdrop_path) {
                  return `${process.env.REACT_APP_BASEIMGURL}${movie.backdrop_path}`
                } else {
                  return backdropBroken
                }
              }
              return (
                <div
                  className="flex items-center gap-5 group mb-4 cursor-pointer"
                  key={movie.id}
                  onClick={() => {
                    props.handleMovie(movie)
                    handleNavigate()
                    setLocalKeyword('')
                  }}
                >
                  <img
                    src={imageBroken()}
                    alt={movie.title}
                    className="w-28 rounded-md"
                  />
                  <p className="p-3 text-xl truncate group-hover:text-white">
                    {movie.title}
                  </p>
                </div>
              )
            })}
          </div>

          <div
            className="px-2 pb-2 group"
            onClick={() => {
              props.handleMovieResults(movies)
              props.handlePageNumber(1)
              handleNavigateToResults()
              setLocalKeyword('')
            }}
          >
            <p
              className={`${
                movies.length < 4 ? 'hidden' : 'block'
              } text-center group-hover:text-white p-2 rounded-lg bg-black-for-card cursor-pointer`}
            >
              see more result...
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex gap-3">
        <NavLink
          className="px-4 py-2 text-sm text-white rounded-lg font-semibold border-[1.5px] border-white hover:bg-red-700 hover:text-white hover:border-red-700"
          to="/register"
        >
          Register
        </NavLink>
        <NavLink
          className="px-4 py-2 text-sm text-white rounded-lg font-semibold bg-red-600 hover:bg-red-700"
          to="/login"
        >
          Login
        </NavLink>
      </div>
      {/* end navbar on desktop */}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    keyword: state.keyword,
    discover: state.discover,
    detailMovie: state.detailMovie,
    movieResults: state.movieResults,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleNavsideTrue: () => dispatch({ type: ActionType.CHANGE_NAVSIDE_TRUE }),
    handleKeyword: (words) =>
      dispatch({ type: ActionType.ADD_KEYWORD, keyword: words }),
    handleDiscoverMovieList: (movies) =>
      dispatch({
        type: ActionType.ADD_DISCOVER_MOVIELIST,
        discover: movies,
      }),
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
