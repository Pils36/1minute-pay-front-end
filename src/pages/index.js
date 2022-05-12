import React, { useState } from "react";
import Coins from "../components/Coins";
import Download from "../components/Download";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header>
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
        </>
      </Header>
      <Coins/>
      <Download/>
      <Footer/>
    </>
  );
};

export default Home;
