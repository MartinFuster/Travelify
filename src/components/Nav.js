import React from "react";

function Nav(props) {
  function handleClick(event) {
    const checked = event.target.checked;
    let element = document.getElementsByClassName("navigation__list")[0];

    if (checked) {
      element.classList.add("is-visible");
      element.classList.remove("is-invisible");
    } else {
      setTimeout(() => {
        element.classList.add("is-invisible");
      }, 400);
    }
  }

  function handleNavigation() {
    const hamburguer = document.getElementsByClassName(
      "navigation__checkbox"
    )[0];
    hamburguer.click();
  }

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
        onClick={handleClick}
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon"></span>
      </label>
      <div className="navigation__background"></div>
      <nav className="navigation__nav" id="nav">
        <ul className="navigation__list">
          <li className="navigation__item" onClick={handleNavigation}>
            <a href={props.firstHref} className="navigation__link">
              <span>01</span>
              {props.firstItem}
            </a>
          </li>
          <li className="navigation__item" onClick={handleNavigation}>
            <a href={props.secondHref} className="navigation__link">
              <span>02</span>
              {props.secondItem}
            </a>
          </li>
          <li className="navigation__item" onClick={handleNavigation}>
            <a href={props.thirdHref} className="navigation__link">
              <span>03</span>
              {props.thirdItem}
            </a>
          </li>
          <li className="navigation__item" onClick={handleNavigation}>
            <a href={props.fourthHref} className="navigation__link">
              <span>04</span>
              {props.fourthItem}
            </a>
          </li>
          <li className="navigation__item" onClick={handleNavigation}>
            <a href={props.fifthHref} className="navigation__link">
              <span>05</span>
              {props.fifthItem}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
