import Navbar from '../components/Navbar'
import MovieResults from '../components/MovieResults'

const Results = () => {
  return (
    <div className="container mx-auto w-full p-8 bg-black-for-content h-screen overflow-scroll">
      <Navbar />
      <MovieResults />
    </div>
  )
}
export default Results
