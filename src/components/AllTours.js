import React from "react";
import Navbar from "./Navbar";
import AvailableTours from "./AvailableTours";
import Footer from "./Footer";
import Popup from "./Popup";

function AllTours() {
  return (
    <section className="allTours">
      <Popup />
      <Navbar />
      <AvailableTours />
      <Footer />
    </section>
  );
}

export default AllTours;
