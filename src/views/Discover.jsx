import Navbar from '../components/Navbar'
import DiscoverContent from '../components/DiscoverContent'

const Discover = () => {
  return (
    <div className="container mx-auto w-full p-8 bg-black-for-content h-screen overflow-scroll">
      <Navbar />
      <DiscoverContent />
    </div>
  )
}
export default Discover
