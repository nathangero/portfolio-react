import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'
import Footer from './components/Footer'

function App() {

  // Show Navbar and footer throughout the app
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
