import React from "react";
import Card from "./Card";

function Features() {
  return (
    <section className="section-features" id="features">
      <div className="container">
        <div className="row">
          <Card
            imageClasses="feature-box__icon fas fa-globe-americas"
            headingText="Explore the world"
            paragraphText="Our tours go all around the world, even to the most remote
            or dangerous places there are."
          />
          <Card
            imageClasses="feature-box__icon fas fa-compass"
            headingText="Meet nature"
            paragraphText="Find yourself innmersed in nature, being as present with
            the world as you always wanted to be"
          />
          <Card
            imageClasses="feature-box__icon fas fa-map-marked-alt"
            headingText="Find your way"
            paragraphText="In our adventures you will have the oportunity to show your great
            orientation skills"
          />
          <Card
            imageClasses="feature-box__icon fas fa-heart"
            headingText="Live a healthier life"
            paragraphText="throught our travels, you will find yourself eating 
            delicious and organic meals"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
