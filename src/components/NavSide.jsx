// import anchor from react-router
import { NavLink } from 'react-router-dom'

// import connect from redux for connecting glsobalState
import { connect } from 'react-redux'

// import icons from react-icons
import { AiFillHome } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { AiFillCompass } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'

import ActionType from '../redux/globalActionType'

// import hook react
import { useState, useEffect } from 'react'
import { getMovieDiscover } from '../services/ApiServices'

const NavSide = (props) => {
  const [discover, setDiscover] = useState([])
  const [discover2, setDiscover2] = useState()
  const [discover3, setDiscover3] = useState()
  const [discover4, setDiscover4] = useState()
  const [discover5, setDiscover5] = useState()
  const [discover6, setDiscover6] = useState()
  const [discover7, setDiscover7] = useState()
  const [discover8, setDiscover8] = useState()
  const [discover9, setDiscover9] = useState()
  const [discover10, setDiscover10] = useState()
  const [discover11, setDiscover11] = useState()
  const [discover12, setDiscover12] = useState()
  const [discover13, setDiscover13] = useState()
  const [discover14, setDiscover14] = useState()
  const [discover15, setDiscover15] = useState()
  const [discover16, setDiscover16] = useState()
  const [discover17, setDiscover17] = useState()
  const [discover18, setDiscover18] = useState()
  const [discover19, setDiscover19] = useState()
  const [discover20, setDiscover20] = useState()

  const discoverAll = [].concat(
    discover,
    discover2,
    discover3,
    discover4,
    discover5,
    discover6,
    discover7,
    discover8,
    discover9,
    discover10,
    discover11,
    discover12,
    discover13,
    discover14,
    discover15,
    discover16,
    discover17,
    discover18,
    discover19,
    discover20,
  )

  // get genre list from api

  useEffect(() => {
    getMovieDiscover(1).then((result) => {
      setDiscover(result)
    })
  }, [])

  useEffect(() => {
    getMovieDiscover(2).then((result) => {
      setDiscover2(result)
    })
  }, [])

  useEffect(() => {
    getMovieDiscover(3).then((result) => {
      setDiscover3(result)
    })
  }, [])

  useEffect(() => {
    getMovieDiscover(4).then((result) => {
      setDiscover4(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(5).then((result) => {
      setDiscover5(result)
    })
  }, [])

  useEffect(() => {
    getMovieDiscover(6).then((result) => {
      setDiscover6(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(7).then((result) => {
      setDiscover7(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(8).then((result) => {
      setDiscover8(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(9).then((result) => {
      setDiscover9(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(10).then((result) => {
      setDiscover10(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(11).then((result) => {
      setDiscover11(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(12).then((result) => {
      setDiscover12(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(13).then((result) => {
      setDiscover13(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(14).then((result) => {
      setDiscover14(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(15).then((result) => {
      setDiscover15(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(16).then((result) => {
      setDiscover16(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(17).then((result) => {
      setDiscover17(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(18).then((result) => {
      setDiscover18(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(19).then((result) => {
      setDiscover19(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(20).then((result) => {
      setDiscover20(result)
    })
  }, [])

  return (
    // hidden md:block
    <nav
      className={`${
        props.navsideOnMobile === false ? 'hidden md:block' : 'absolute shadow'
      } bg-black-darker h-screen md:w-1/4 w-[80%] p-8 overflow-scroll z-[99]`}
    >
      <div className="flex justify-between">
        <div className="flex-row">
          <h2 className="text-white text-2xl font-extrabold uppercase">
            rustianda
          </h2>
          <h2 className="text-red-600 text-2xl font-extrabold uppercase">
            movies
          </h2>
        </div>
        <IoMdClose
          className={`${
            props.navsideOnMobile === false ? 'hidden' : ''
          } text-2xl cursor-pointer`}
          onClick={props.handleNavsideFalse}
        />
      </div>

      <div className="pt-12 pb-5 border-b-[2px] border-b-black-for-card">
        {/* news feed nav */}
        <h4 className="pb-5">News Feed</h4>
        <div
          className="flex gap-5 py-3 cursor-pointer items-center"
          onClick={props.handleHomeIcon}
        >
          <AiFillHome
            className={`${props.home ? 'text-red-600' : ''} text-2xl`}
          />
          <NavLink className="navside-anchor" to="/">
            Home
          </NavLink>
        </div>
        <div
          className="flex gap-5 py-3 cursor-pointer items-center "
          onClick={props.handleWatchListIcon}
        >
          <AiFillHeart
            className={`${props.watchlist ? 'text-red-600' : ''} text-2xl`}
          />
          <NavLink className="navside-anchor" to="/watchlist">
            Watchlist
          </NavLink>
        </div>
        <div
          className="flex gap-5 py-3 cursor-pointer items-center "
          onClick={() => {
            props.handleDiscoverIcon()
            props.handleDiscoverMovieList(discoverAll)
          }}
        >
          <AiFillCompass
            className={`${props.discover ? 'text-red-600' : ''} text-2xl`}
          />
          <NavLink className="navside-anchor" to="/discover">
            Discover
          </NavLink>
        </div>
      </div>

      {/* categories nav */}
      <div className="pt-12 pb-5">
        <h4 className="pb-5">Categories</h4>
        <ul>
          {props.genres.map((genre, i) => {
            return (
              <li
                className="py-2"
                key={genre.id}
                onClick={() => {
                  props.handleDiscoverMovieList(discoverAll)
                  props.handleSelectedGenre(genre)
                }}
              >
                <NavLink className="navside-anchor" to="/discover">
                  {genre.name}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    home: state.homeIcon,
    watchlist: state.watchlistIcon,
    discover: state.discoverIcon,
    navsideOnMobile: state.navsideMobile,
    genres: state.genres,
    selectedGenre: state.selectedGenre,
    discoverAll: state.discover,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleHomeIcon: () => dispatch({ type: ActionType.CHANGE_HOME_ICON_COLOR }),
    handleWatchListIcon: () =>
      dispatch({ type: ActionType.CHANGE_WATCHLIST_ICON_COLOR }),
    handleDiscoverIcon: () =>
      dispatch({ type: ActionType.CHANGE_DISCOVER_ICON_COLOR }),
    handleNavsideFalse: () =>
      dispatch({ type: ActionType.CHANGE_NAVSIDE_FALSE }),
    handleSelectedGenre: (genre) =>
      dispatch({ type: ActionType.ADD_DETAIL_GENRE, selectedGenre: genre }),
    handleDiscoverMovieList: (movies) =>
      dispatch({
        type: ActionType.ADD_DISCOVER_MOVIELIST,
        discover: movies,
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavSide)
