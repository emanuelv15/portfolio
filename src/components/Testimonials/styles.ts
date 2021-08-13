import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 50px;
  }

  h1,
  h3,
  h4 {
    color: var(--mainColor);
  }

  .container {
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Card = styled.div`
  width: 250px;
  height: 70%;
  border-radius: 10px;
  background-color: var(--tertiaryColor);
  box-shadow: 0px 0px 15px -8px var(--secondaryColor);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  transition: all 0.5s ease;

  &.featured {
    width: 300px;
    height: 75%;
    margin: 0 30px;
  }

  &:hover {
    transform: scale(1.1);
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      &.left,
      &.right {
        height: 25px;
      }

      &.user {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
        margin: 0 30px;
        box-shadow: 0px 0px 15px -4px var(--secondaryColor);
      }
    }
  }

  .center {
    padding: 10px;
    border-radius: 10px;
    background-color: var(--tertiaryColor);
    box-shadow: 0px 0px 15px -8px var(--secondaryColor);

    h3 {
      color: var(--mainColor);
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    h3 {
      margin-bottom: 5px;
    }

    h4 {
      color: var(--secondaryColor);
    }
  }
`;
