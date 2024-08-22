import React from "react";
import Slider from "react-slick";

import { Container, SlideImage } from "./style";

export function Carousel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 900,
  };

  return (
    <Container>
      <Slider {...settings}>
        <div>
           
          <a href="http://www.google.com.br"><SlideImage src="../../../imagens/carrossel1.png" alt="Slide 1" />  </a>
        </div>
        <div>
          <SlideImage src="../../../imagens/carrossel2.png" alt="Slide 1" />
        </div>
        <div>
          <SlideImage src="../../../imagens/carrossel3.png" alt="Slide 1" />
        </div>
        <div>
          <SlideImage src="../../../imagens/carrossel1.png" alt="Slide 1" />
        </div>
        <div>
          <SlideImage src="../../../imagens/carrossel2.png" alt="Slide 1" />
        </div>

      </Slider>
    </Container>
  );
}
