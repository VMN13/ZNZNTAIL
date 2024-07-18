import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (


  
  <div className="video-responsive
  
  ">
    <iframe className="
  object-contain
    p-5
    object-scale-down
    rounded-lg
    "
    max-height="100%"
      max-width="100%"
      width="400"
      height="260"
      src={`https://www.youtube.com/embed/${embedId}&autoplay=1&mute=1&loop=1&color=white&controls=1&version=3&rel=0`}
      loop="1"
      border="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      title="Embedded youtube"
      allowfullscreen
      playlist="embed"
    />
  </div>
);



YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;