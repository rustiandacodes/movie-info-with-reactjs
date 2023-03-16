import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="absolute left-0 z-[999] bg-black-for-content w-screen h-screen">
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex-row text-center">
          <h1 className="text-9xl font-semibold text-red-600">404</h1>
          <p className="text-2xl">Oops something wrong!</p>
          <p className="mt-3 mb-10 text-lg">
            The page you were looking for does not exist.
          </p>
          <NavLink
            to="/"
            className="py-2 px-3 text-white rounded-lg hover:opacity-90 bg-red-600"
          >
            Back to Home
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default NotFound
