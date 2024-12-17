import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./pages/shared/NavBar";
import Footer from "./pages/shared/Footer";
import { ToastContainer } from "react-toastify";
// import Footer from "../pages/Shared/Footer/Footer";
// import NavBar from "../pages/Shared/NavBar/NavBar";

const App = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div>
      {noHeaderFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
      <ToastContainer />
    </div>
  );
};

export default App;
