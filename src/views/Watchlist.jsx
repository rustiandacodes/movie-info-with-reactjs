import Navbar from '../components/Navbar'
import notFoundWarning from '../errors/not-found.png'

const Watchlist = () => {
  return (
    <div className="container mx-auto w-full p-8 bg-black-for-content h-screen overflow-scroll">
      <Navbar />
      <p>Watchlist</p>
      <div className="w-full flex justify-center">
        <img src={notFoundWarning} alt="not-found" className="w-[45%]" />
      </div>
    </div>
  )
}

export default Watchlist
