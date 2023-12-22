import NavBar from "./components/NavBar";

import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Orders from "./Pages/Orders";
import MyAccount from "./Pages/MyAccount";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <>
      <NavBar activeLink={activeLink} setActiveLink= {setActiveLink}/>
      <Routes>
        <Route path="/" element={<Home activeLink={activeLink} setActiveLink= {setActiveLink}/>} />
        <Route path="orders" element={<Orders />} />
        <Route path="menu" element={<Menu />} />
        <Route path="myAccount" element={<MyAccount />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
