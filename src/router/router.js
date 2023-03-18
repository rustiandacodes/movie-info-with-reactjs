// import react-router-dom function
import { Routes, Route } from 'react-router-dom'

// import views
import Home from '../views/Home'
import Watchlist from '../views/Watchlist'
import Discover from '../views/Discover'
import Detail from '../views/Detail'
import Results from '../views/Results'
import NotFound from '../errors/NotFound'

// Router or path to render by url
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/watchlist" element={<Watchlist />}></Route>
      <Route path="/discover" element={<Discover />}></Route>
      <Route path="/results" element={<Results />}></Route>
      <Route path="/detailmovie/:identifier" element={<Detail />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}

export default Router
