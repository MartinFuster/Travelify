import React from "react";
import Button from "./Button";

function TourCard(props) {
  return (
    <div className="col-lg-4">
      <div className="card" data-aos="fade-up">
        <div className="card__side card__side--front">
          <div className={props.imageClass}></div>
          <h4 className="card__heading">
            <span className={props.headingClass}>{props.headingText}</span>
          </h4>
          <div className="card__details">
            <ul>
              <li>{props.listOne}</li>
              <li>{props.listTwo}</li>
              <li>{props.listThree}</li>
              <li>{props.listFour}</li>
              <li>{props.listFive}</li>
            </ul>
          </div>
        </div>
        <div className={props.backsideClass}>
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">only</p>
              <p className="card__price-value">{props.price}</p>
            </div>
            <Button
              text="Book now"
              class="btn btn--white btn--animated"
              href="#popup"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
