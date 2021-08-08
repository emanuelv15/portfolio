import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: white;
`;

export const Left = styled.div`
  flex: 0.5;
  overflow: hidden;

  .imgContainer {
    width: 700px;
    height: 700px;
    background-color: crimson;
    border-radius: 50%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    float: right;

    .img {
      height: 90%;
    }
  }
`;

export const Right = styled.div`
  flex: 0.5;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: black;
    font-size: 60px;
    margin: 10px 0;
  }
  h2 {
    color: black;
    font-size: 35px;
  }
  h3 {
    color: black;
    font-size: 30px;

    span {
      font-size: inherit;
      color: crimson;
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
  bottom: 10px;
  left: 40%;

  img {
    width: 30px;
    animation: arrowBlink 2s infinite;
  }

  @keyframes arrowBlink {
    100% {
      opacity: 0;
    }
  }
`;
