// import components
import Navbar from '../components/Navbar'
import TrendingMovies from '../components/TrendingMovie'
import Hero from '../components/Hero'

// main content
const Home = () => {
  return (
    <div className="container mx-auto w-full p-8 bg-black-for-content h-screen overflow-scroll">
      <Navbar />
      <Hero />
      <TrendingMovies />
    </div>
  )
}
export default Home
