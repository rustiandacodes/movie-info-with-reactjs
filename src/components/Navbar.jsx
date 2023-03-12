// Import anchor componets from react-router-dom
import { NavLink } from 'react-router-dom'

// import icons from react-icons
import { RxHamburgerMenu } from 'react-icons/rx'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'

// import hook
import { useState } from 'react'

// import state management connect
import { connect } from 'react-redux'

// main components
const Navbar = (props) => {
  const [closeSearch, setCloseSearch] = useState(false)

  return (
    <div className="container mx-auto flex gap-5 items-center justify-between py-3 md:px-8">
      {/* navbar on mobile */}
      <RxHamburgerMenu
        className="text-2xl cursor-pointer md:hidden"
        onClick={props.handleNavsideTrue}
      />
      <div className="text-center flex-row justify-center md:hidden">
        <h4 className="uppercase font-extrabold text-white text-2xl">
          rustianda
        </h4>
        <h4 className="uppercase font-extrabold text-red-600 text-2xl">
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
        } absolute p-7 top-0 left-0 w-full bg-black-for-content z-[99] h-full md:hidden`}
      >
        <div className="flex items-center gap-8 px-3 mx-auto">
          <AiOutlineArrowLeft
            className="text-2xl cursor-pointer font-bold"
            onClick={() => setCloseSearch(false)}
          />
          <div className="px-5 py-3 shadow rounded-lg flex justify-between w-full">
            <input
              type="text"
              className="bg-black-for-content w-full outline-none text-sm "
              placeholder="search any movies ..."
              value={props.keyword}
              onChange={(e) => {
                props.handleKeyword(e.target.value)
              }}
            />
            <IoMdClose
              className={`${
                props.keyword ? 'block' : 'hidden'
              } text-2xl ml-5 cursor-pointer`}
              onClick={() => props.handleKeyword('')}
            />
          </div>
        </div>
      </div>

      {/* end navbar on mobile */}

      {/* navbar on desktop */}
      <div className="px-5 py-3 shadow rounded-lg  hidden md:flex justify-between lg:w-1/2 ml-32">
        <input
          type="text"
          className="bg-black-for-content w-full outline-none"
          placeholder="search any movies ..."
          value={props.keyword}
          onChange={(e) => {
            props.handleKeyword(e.target.value)
          }}
        />
        <IoMdClose
          className={`${
            props.keyword ? 'block' : 'hidden'
          } text-2xl mx-5 cursor-pointer`}
          onClick={() => props.handleKeyword('')}
        />
        <FiSearch className="text-2xl" />
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleNavsideTrue: () => dispatch({ type: 'CHANGE_NAVSIDE_TRUE' }),
    handleKeyword: (words) => dispatch({ type: 'ADD_KEYWORD', keyword: words }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
