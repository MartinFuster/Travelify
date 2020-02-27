import React from "react";
import H2Heading from "./H2Heading";
import TourCard from "./TourCard";

import { Link } from "react-router-dom";

function Tours() {
  return (
    <section className="section-tours" id="tours">
      <div className="container">
        <H2Heading
          divClass="u-center-text u-margin-bottom-big"
          h2Class="heading-secondary"
          text="Most popular tours"
        />
        <div className="row">
          <TourCard
            imageClass="card__picture card__picture--1"
            headingClass="card__heading-span card__heading-span--1"
            headingText="The sea explorer"
            listOne="3 day tour"
            listTwo="Up to 30 people"
            listThree="2 tour guides"
            listFour="Sleep in cozy hotels"
            listFive="Dificulty: easy"
            backsideClass="card__side card__side--back card__side--back-1"
            price="$299"
            dataAos="fade-up"
          />
          <TourCard
            imageClass="card__picture card__picture--2"
            headingClass="card__heading-span card__heading-span--2"
            headingText="The forest hiker"
            listOne="7 day tour"
            listTwo="Up to 40 people"
            listThree="6 tour guides"
            listFour="Sleep in provided tents"
            listFive="Dificulty: medium"
            backsideClass="card__side card__side--back card__side--back-2"
            price="$499"
            dataAos="fade-up"
            dataAosDelay="100"
          />
          <TourCard
            imageClass="card__picture card__picture--3"
            headingClass="card__heading-span card__heading-span--3"
            headingText="The snow adventurer"
            listOne="5 day tour"
            listTwo="Up to 15 people"
            listThree="3 tour guides"
            listFour="Sleep in provided tents"
            listFive="Dificulty: hard"
            backsideClass="card__side card__side--back card__side--back-3"
            price="$799"
            dataAos="fade-up"
            dataAosDelay="200"
          />
        </div>
        <div className="card__button">
          <Link
            to="/tours"
            className="btn btn--green--gradient"
            data-aos="zoom-in-up"
          >
            Discover All Tours
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Tours;
