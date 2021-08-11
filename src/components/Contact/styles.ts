import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--backgroundDark);
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  h2 {
    color: var(--mainColor);
    margin-bottom: 50px;

    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }

  .left {
    flex: 1;
    overflow: hidden;

    img {
      height: 100%;
    }
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      color: var(--mainColor);
      font-size: 50px;

      @media (max-width: 768px) {
        font-size: 40px;
      }
    }

    form {
      width: 70%;
      height: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      input {
        width: 80%;
        height: 30px;
        font-size: 14px;

        border: 0px solid;
        border-color: var(--secondaryColor);
        border-radius: 5px;
        color: var(--mainColor);
        background: transparent;
        padding: 5px;
        box-shadow: 0px 0px 15px -5px var(--secondaryColor);

        &::placeholder {
          color: var(--secondaryColor);
        }
      }

      textarea {
        width: 80%;
        height: 200px;
        font-size: 14px;

        border: 0px solid;
        border-color: var(--secondaryColor);
        border-radius: 5px;
        color: var(--mainColor);
        background: transparent;
        padding: 5px;
        box-shadow: 0px 0px 15px -5px var(--secondaryColor);

        &::placeholder {
          color: var(--secondaryColor);
        }
      }

      button {
        width: 150px;
        height: 30px;
        color: white;
        background-color: crimson;
        border: none;
        border-radius: 10px;
        font-weight: 500;

        &:focus {
          outline: none;
        }
      }

      span {
        color: var(--secondaryColor);
      }
    }
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 5px;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: var(--mainColor);
    transition: all 0.3s ease;

    h3 {
      font-weight: 400;
      font-size: 25px;
      margin-left: 10px;

      @media (max-width: 768px) {
        font-size: 20px;
      }
    }

    @media (min-width: 769px) {
      &:hover {
        transform: scale(1.2);
        color: var(--secondaryColor);

        h3 {
          font-weight: 500;
        }
      }
    }
  }
`;
