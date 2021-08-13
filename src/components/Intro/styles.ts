import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 0.5;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .imgContainer {
    width: 600px;
    height: 600px;
    background-color: var(--secondaryColor);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-bottom: 50px;
      height: 90%;

      @media (max-width: 768px) {
        height: 50%;
      }
    }
  }
`;

export const Right = styled.div`
  flex: 0.5;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px;
    align-items: center;
  }

  h1 {
    color: var(--mainColor);
    font-size: 60px;
    margin: 10px 0;

    @media (max-width: 768px) {
      font-size: 40px;
    }
  }
  h2 {
    color: var(--mainColor);
    font-size: 35px;
  }
  h3 {
    color: var(--mainColor);
    font-size: 30px;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    span {
      font-size: inherit;
      color: var(--secondaryColor);
    }

    .ityped-cursor {
      animation: blink 1s infinite;
    }

    @keyframes blink {
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;

export const Down = styled.a`
  position: absolute;
  bottom: 1%;
  left: 40%;

  img {
    width: 35px;
    animation: arrowBlink 3s infinite;
  }

  @keyframes arrowBlink {
    100% {
      opacity: 0;
    }
  }
`;
