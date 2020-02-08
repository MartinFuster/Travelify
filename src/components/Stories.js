import React from "react";
import H2Heading from "./H2Heading";
import Story from "./Story";
import image1 from "../img/nat-8.jpg";
import image2 from "../img/nat-9.jpg";
import videoMp4 from "../img/video.mp4";
import videoWebm from "../img/video.webm";
import Video from "./Video";

function Stories() {
  return (
    <div className="section-stories" id="testimonials" data-aos="fade-up">
      <Video videoMp4={videoMp4} videoWebm={videoWebm} />
      <div className="container">
        <H2Heading
          divClass="u-center-text u-margin-bottom-big"
          h2Class="story__header"
          text="Testimonials"
        />
        <div className="row">
          <Story
            image={image1}
            name="Mary Smith"
            title="I had the best week ever with my family"
            content="I went on this trip with my family expecting it to be good, 
            but not great. I cannot tell you how wrong i was!. The tour guides were
            extremely friendly, the activities were really fun and the level of
            intimacy i have with my family increased as well."
          />
          <Story
            image={image2}
            name="James Brown"
            title="A life changing experience"
            content="Before this trip, i tought that happiness came by doing what you are
            supposed to do, but this experience absolutely changed me. It made me realize
             that this is not all that there is, and that my possibilites are endless.
             Trust in yourself and you will achieve your wildest dreams. "
          />
        </div>
      </div>
    </div>
  );
}

export default Stories;
