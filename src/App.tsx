import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
function App() {

  return (
    <div className="h-screen w-full bg-slate-500">
        
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
