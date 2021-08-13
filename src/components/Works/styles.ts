import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--secondaryColor);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .arrow {
    height: 50px;
    position: absolute;
    cursor: pointer;

    @media (max-width: 768px) {
      display: none;
    }

    &.left {
      left: 100px;
      transform: rotateY(180deg);
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.2) rotateY(180deg);
      }
    }

    &.right {
      right: 100px;
      transition: all 0.3s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

export const Slider = styled.div`
  height: 350px;
  display: flex;
  position: absolute;
  left: 0;
  transition: all 1s ease-out;

  @media (max-width: 768px) {
    height: 100vh;
    flex-direction: column;
    justify-content: center;
  }

  .container {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    .item {
      width: 700px;
      height: 100%;
      background-color: var(--background);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 768px) {
        width: 90%;
        height: 200px;
        margin: 10px 0;
      }

      .left {
        flex: 4;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;

        .leftContainer {
          width: 90%;
          height: 70%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .imageContainer {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: var(--mainColor);
            display: flex;
            align-items: center;
            justify-content: center;

            @media (max-width: 768px) {
              width: 20px;
              height: 20px;
            }

            img {
              width: 25px;

              @media (max-width: 768px) {
                width: 15px;
              }
            }
          }

          h2 {
            color: var(--secondaryColor);
            font-size: 20px;

            @media (max-width: 768px) {
              font-size: 11px;
            }
          }

          p {
            color: var(--mainColor);
            font-size: 13px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical;

            @media (max-width: 768px) {
              font-size: 7px;
            }
          }

          a {
            width: 10%;

            span {
              color: var(--mainColor);
              font-size: 12px;
              font-weight: 600;
              text-decoration: none;
              cursor: pointer;

              @media (max-width: 768px) {
                font-size: 7px;
              }
            }
          }
        }
      }

      .right {
        flex: 8;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        img {
          width: 80%;
          height: 120%;
          object-fit: cover;
          transform: rotate(-10deg);
        }
      }
    }
  }
`;
