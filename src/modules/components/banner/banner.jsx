import React from "react";
import { Carousel } from "antd";

import "./banner.style.css";

const Banner = ({ imgSrc, title, id }) => {
  return (
    <Carousel>
      <div>
        <img src={imgSrc} alt={`${title} - ${id}`} />
      </div>
    </Carousel>
  );
};

export default Banner;
