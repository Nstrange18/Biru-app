import { Outlet, useLocation } from "react-router-dom";
// import NavBar from "../component/NavBar"
import Footer from "../component/Footer";
import { useEffect } from "react";

const RootLayout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <div>
      <div className="body">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
