import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--backgroundDark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 50px;
    color: var(--mainColor);
  }

  ul {
    margin: 10px;
    padding: 0;
    list-style: none;
    display: flex;
  }

  .containerButton {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

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

      &:last-child {
        margin-left: 20px;
      }
    }
  }
`;

export const ContainerItem = styled.div`
  width: 70%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .item {
    width: 220px;
    height: 150px;
    border-radius: 20px;
    border: 1px solid var(--secondaryColor);
    margin: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--mainColor);
    transition: all 0.5s ease;
    cursor: pointer;

    a {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h3 {
      position: absolute;
      font-size: 20px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }

    &:hover {
      background-color: var(--secondaryColor);

      img {
        opacity: 0.2;
        z-index: 0;
      }
    }
  }
`;
