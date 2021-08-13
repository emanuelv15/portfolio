import { useState } from "react";

import { works } from "../../services/data";

import { Container, Slider } from "./styles";

export function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleClick(way: string) {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : works.length - 1)
      : setCurrentSlide(currentSlide < works.length - 1 ? currentSlide + 1 : 0);
  }

  return (
    <Container id="works">
      <Slider style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {works.map((item) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imageContainer">
                    <img src={item.icon} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <a
                    href={item.link ? item.link : item.git}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{item.link ? "Test link" : "Git link"}</span>
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={item.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </Container>
  );
}
