import React from "react";
import H2Heading from "./H2Heading";
import TextSection from "./TextSection";
import ImageSection from "./ImageSection";

function About() {
  return (
    <main>
      <section className="section-about" id="about">
        <div className="container">
          <H2Heading
            divClass="u-center-text u-margin-bottom-big u-margin-top-medium"
            h2Class="heading-secondary"
            text="Exciting tours for adventorous people"
          />
          <div className="row">
            <TextSection />
            <ImageSection />
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
