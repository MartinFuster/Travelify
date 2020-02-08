import React from "react";
import Photo1 from "../img/nat-1-large.jpg";
import Photo2 from "../img/nat-2-large.jpg";
import Photo3 from "../img/nat-3-large.jpg";

function ImageSection() {
  return (
    <div className="col-lg-6">
      <div className="composition">
        <img
          src={Photo1}
          alt="Trees in a lake"
          className="composition__photo composition__photo--p1"
          data-aos="zoom-out-down"
        />
        <img
          src={Photo2}
          alt="A person climbing a mont"
          className="composition__photo composition__photo--p2"
          data-aos="zoom-out"
        />
        <img
          src={Photo3}
          alt="A biker going through a montanious road"
          className="composition__photo composition__photo--p3"
          data-aos="zoom-out-up"
        />
      </div>
    </div>
  );
}

export default ImageSection;
