import "./App.css";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Users from "./Components/Users";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import UserDetails from "./Components/UserDetails";


function App() {
  return (
    <div className="h-screen w-full">
      <Navbar />
      {/* <Card/> */}

      <Outlet />

      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/users" element={<Users />}>
          {/* <Route path="userDetails" element={<UserDetails />}></Route> */}
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
