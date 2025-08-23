import { Outlet } from "react-router-dom"
// import NavBar from "../component/NavBar"
import Footer from "../component/Footer"

const RootLayout = () => {
  return (
    <div>
      
      <div className="body">
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default RootLayout