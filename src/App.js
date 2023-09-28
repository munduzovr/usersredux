import React from "react";
import Navbar from "./components/Navbar";
import MainRoutes from "./routing/MainRoutes";
import Footer from "./components/Footer";
import styles from "./components/css/styles.css"



function App() {
  return (
    <>
      <Navbar/>
        <MainRoutes/>
      <Footer/>
    </>
  );
}

export default App;
