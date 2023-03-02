import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"

function App() {


  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar />
      <div>
        <Home />
        {/*
          <About />
          <Login />
        */}
      </div>
      <Footer />
    </div>
  )
}

export default App
