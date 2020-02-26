import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Company() {
  return (
    <section className="company">
      <Navbar />
      <div className="container" data-aos="fade">
        <h1 className="heading-secondary u-center-text u-margin-top-big u-margin-bottom-small">
          Company
        </h1>
        <p className="paragraph">
          At travelify, we wanted to create an adventure, not a vacation
        </p>
        <p className="paragraph">
          This company strives to be the best adventure provider for you, with
          unforgettable trips to Mount Everest, The Great Wall of China, The
          most misterious forest on earth, the arctic and many more!
        </p>
        <p className="paragraph">
          If you are tired of going on vacations and want to do something more
          exciting, travelify is for you. We offer the most premium tours in the
          world.
        </p>
        <p className="paragraph u-margin-bottom-fill">
          Go and book your adventure now!
        </p>
      </div>
      <Footer />
    </section>
  );
}

export default Company;
