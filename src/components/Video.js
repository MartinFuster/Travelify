import React from "react";

function Video(props) {
  return (
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src={props.videoMp4} type="video/mp4" />
        <source src={props.videoWebm} type="video/webm" />
        Your browser is not supported :(
      </video>
    </div>
  );
}

export default Video;
