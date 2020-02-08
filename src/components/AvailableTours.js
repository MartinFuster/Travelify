import React from "react";
import H2Heading from "./H2Heading";
import TourCard from "./TourCard";

function AvailableTours() {
  return (
    <section className="available-tours">
      <div className="container">
        <H2Heading
          divClass="u-center-text u-margin-bottom-medium u-margin-top-medium"
          h2Class="heading-secondary"
          text="Tours"
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
          />

          <TourCard
            imageClass="card__picture card__picture--4"
            headingClass="card__heading-span card__heading-span--4"
            headingText="The Island Explorer"
            listOne="3 day tour"
            listTwo="Up to 8 people"
            listThree="2 tour guides"
            listFour="Sleep in cozy hotels"
            listFive="Dificulty: easy"
            backsideClass="card__side card__side--back card__side--back-4"
            price="$249"
          />

          <TourCard
            imageClass="card__picture card__picture--5"
            headingClass="card__heading-span card__heading-span--5"
            headingText="The Dark Forest"
            listOne="6 day tour"
            listTwo="Up to 6 people"
            listThree="1 tour guide"
            listFour="Sleep in provided tents"
            listFive="Dificulty: medium"
            backsideClass="card__side card__side--back card__side--back-5"
            price="$1.675"
          />

          <TourCard
            imageClass="card__picture card__picture--6"
            headingClass="card__heading-span card__heading-span--6"
            headingText="The Arctic adventure"
            listOne="3 day tour"
            listTwo="Up to 9 people"
            listThree="3 tour guides"
            listFour="Sleep in provided shelters"
            listFive="Dificulty: hard"
            backsideClass="card__side card__side--back card__side--back-6"
            price="$14.999"
          />

          <TourCard
            imageClass="card__picture card__picture--7"
            headingClass="card__heading-span card__heading-span--7"
            headingText="The world from above"
            listOne="1 day tour"
            listTwo="Up to 3 people"
            listThree="No tour guides"
            listFour="Sleep in a small hotel"
            listFive="Dificulty: easy"
            backsideClass="card__side card__side--back card__side--back-7"
            price="$699"
          />

          <TourCard
            imageClass="card__picture card__picture--8"
            headingClass="card__heading-span card__heading-span--8"
            headingText="The Great Wall Adventure"
            listOne="14 day tour"
            listTwo="Up to 30 people"
            listThree="7 tour guides"
            listFour="Sleep in provided tents"
            listFive="Dificulty: hard"
            backsideClass="card__side card__side--back card__side--back-8"
            price="$7.499"
          />

          <TourCard
            imageClass="card__picture card__picture--9"
            headingClass="card__heading-span card__heading-span--9"
            headingText="The Everest Climber"
            listOne="9 day tour"
            listTwo="Up to 6 people"
            listThree="2 tour guides"
            listFour="Sleep in provided tents"
            listFive="Dificulty: extreme"
            backsideClass="card__side card__side--back card__side--back-9"
            price="$39.999"
          />
          <TourCard
            imageClass="card__picture card__picture--10"
            headingClass="card__heading-span card__heading-span--10"
            headingText="The Egypt Adventure"
            listOne="13 day tour"
            listTwo="Up to 12 people"
            listThree="5 tour guides"
            listFour="Sleep in luxurious hotel"
            listFive="Dificulty: easy"
            backsideClass="card__side card__side--back card__side--back-10"
            price="$2.299"
          />
          <TourCard
            imageClass="card__picture card__picture--11"
            headingClass="card__heading-span card__heading-span--11"
            headingText="Horse Rider Adventurer"
            listOne="5 day tour"
            listTwo="Up to 14 people"
            listThree="3 tour guides"
            listFour="Sleep in provided cottages"
            listFive="Dificulty: medium"
            backsideClass="card__side card__side--back card__side--back-11"
            price="$1.199"
          />
          <TourCard
            imageClass="card__picture card__picture--12"
            headingClass="card__heading-span card__heading-span--12"
            headingText="The Alps Snowboarder"
            listOne="9 day tour"
            listTwo="Up to 5 people"
            listThree="1 tour guide"
            listFour="Sleep in warm hotels"
            listFive="Dificulty: hard"
            backsideClass="card__side card__side--back card__side--back-12"
            price="$1.649"
          />
        </div>
      </div>
    </section>
  );
}

export default AvailableTours;
