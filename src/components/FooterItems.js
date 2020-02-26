import React from "react";

import { Link } from "react-router-dom";

function FooterItems(props) {
  return (
    <ul
      className="footer-text"
      data-aos="fade"
      data-aos-anchor-placement="bottom-bottom"
    >
      <hr className="footer-text__hr" />
      <li className="footer-text__item">
        <Link to={props.itemOnePath} className="footer-text__link">
          {props.itemOne}
        </Link>
      </li>
      <li className="footer-text__item">
        <Link to={props.itemTwoPath} className="footer-text__link">
          {props.itemTwo}
        </Link>
      </li>
      <li className="footer-text__item">
        <Link to={props.itemThreePath} className="footer-text__link">
          {props.itemThree}
        </Link>
      </li>
      <li className="footer-text__item">
        <Link to={props.itemFourPath} className="footer-text__link">
          {props.itemFour}
        </Link>
      </li>
      <li className="footer-text__item">
        <Link to={props.itemFivePath} className="footer-text__link">
          {props.itemFive}
        </Link>
      </li>
    </ul>
  );
}

export default FooterItems;
