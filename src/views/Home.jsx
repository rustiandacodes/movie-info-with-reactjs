import Navbar from '../components/Navbar'
console.log(process.env.REACT_APP_BASEURL)
console.log(process.env.REACT_APP_APIKEY)
const Home = () => {
  return (
    <div className="container mx-auto w-full p-8 bg-black-for-content">
      <Navbar />
    </div>
  )
}
export default Home
