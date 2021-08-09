import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--backgroundDark);
  display: flex;

  h2 {
    color: var(--mainColor);
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
      color: var(--secondaryColor);
      font-size: 30px;
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
