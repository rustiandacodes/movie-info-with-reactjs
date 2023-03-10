// import anchor from react-router
import { NavLink } from 'react-router-dom'

// import connect from redux for connecting glsobalState
import { connect } from 'react-redux'

// import icons from react-icons
import { AiFillHome } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { AiFillCompass } from 'react-icons/ai'

const NavSide = (props) => {
  console.log(props)
  return (
    <nav className="bg-black-darker h-screen w-1/4 p-8 overflow-scroll hidden md:block">
      <h2 className="text-white text-2xl font-extrabold uppercase">
        rustianda <span className="text-red-600">movies</span>
      </h2>
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
          onClick={props.handleDiscoverIcon}
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
          <li className="py-2">
            <NavLink className="navside-anchor">Action</NavLink>
          </li>
          <li className="py-2">
            <NavLink className="navside-anchor">Horror</NavLink>
          </li>
          <li className="py-2">
            <NavLink className="navside-anchor">Drama</NavLink>
          </li>
          <li className="py-2">
            <NavLink className="navside-anchor">Comedy</NavLink>
          </li>
          <li className="py-2">
            <NavLink className="navside-anchor">Romance</NavLink>
          </li>
          <li className="py-2">
            <NavLink className="navside-anchor">Advanture</NavLink>
          </li>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleHomeIcon: () => dispatch({ type: 'CHANGE_HOME_ICON_COLOR' }),
    handleWatchListIcon: () =>
      dispatch({ type: 'CHANGE_WATCHLIST_ICON_COLOR' }),
    handleDiscoverIcon: () => dispatch({ type: 'CHANGE_DISCOVER_ICON_COLOR' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavSide)
