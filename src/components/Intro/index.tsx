import { useEffect, useRef } from "react";
import { init } from "ityped";

import { Container, Left, Right, Wrapper, Down } from "./styles";

export function Intro() {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    init(textRef.current!, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Junior"],
    });
  }, []);

  return (
    <Container id="intro">
      <Left>
        <div className="imgContainer">
          <img src="assets/man.png" alt="a man" />
        </div>
      </Left>
      <Right>
        <Wrapper>
          <h2>Hi There, I'm</h2>
          <h1>Emanuel Vitor</h1>
          <h3>
            Frontend <span ref={textRef}></span>
          </h3>
        </Wrapper>
        <Down href="#portfolio">
          <img src="assets/down.png" alt="down" />
        </Down>
      </Right>
    </Container>
  );
}
