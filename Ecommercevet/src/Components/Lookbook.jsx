import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carrousel1 from "../assets/carrousel1.png";
import Carrousel2 from "../assets/carrousel2.png";
import Carrousel3 from "../assets/carrousel3.png";
import PinkButton from "./PinkButton";

function Lookbook() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section className="lookBook">
      <div className="lookBook__container">
        <h2 className="lookBook__container--title">Lookbook</h2>
        <p className="lookBook__container--txt">
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you
        </p>
        <PinkButton title="Accéder à la boutique" />
      </div>
      <div className="lookBook__carousel">
        <Slider {...carouselSettings}>
          <div>
            <img src={Carrousel1} alt="Lookbook Image 1" />
          </div>
          <div>
            <img src={Carrousel2} alt="Lookbook Image 2" />
          </div>
          <div>
            <img src={Carrousel3} alt="Lookbook Image 3" />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Lookbook;
