import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Fade() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
        </div>
      </Slider>{" "}
    </div>
  );
}

export default Fade;
