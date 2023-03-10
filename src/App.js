import NavSide from './components/NavSide'
import Router from './router/router'

const App = () => {
  return (
    <div className="flex justify-between">
      <NavSide />
      <Router className="h-screen" />
    </div>
  )
}

export default App
