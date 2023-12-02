import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'
import Footer from './components/Footer'

function App() {
  const styles = {
    backgroundDefault: {
      // "backgroundColor": "red",
      "height": "!important",
      "minHeight": "calc(100vh - 135px)" // Get the size of the view then subtract the navbar and footer heights
    }
  }
  // Show Navbar and footer throughout the app
  return (
    <>
      <Navbar />
      <div style={ styles.backgroundDefault }>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
