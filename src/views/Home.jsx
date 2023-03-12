import Navbar from '../components/Navbar'
import TrendingMovies from '../components/TrendingMovie'
const Home = () => {
  return (
    <div className="container mx-auto w-full p-8 bg-black-for-content h-screen overflow-scroll">
      <Navbar />
      <TrendingMovies />
    </div>
  )
}
export default Home
