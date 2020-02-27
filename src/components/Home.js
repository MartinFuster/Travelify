import React from "react";
import Header from "./Header";
import About from "./About";
import Features from "./Features";
import Tours from "./Tours";
import Stories from "./Stories";
import Booking from "./Booking";
import Footer from "./Footer";
import Popup from "./Popup";

function Home() {
  return (
    <div>
      <div className="content">
        <Popup />
        <Header />
        <About />
        <Features />
        <Tours />
        <Stories />
        <Booking />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
