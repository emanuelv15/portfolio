import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 50px;
    color: var(--mainColor);

    @media (max-width: 768px) {
      font-size: 25px;
    }
  }

  ul {
    margin: 10px;
    padding: 0;
    list-style: none;
    display: flex;
    overflow: hidden;

    @media (max-width: 768px) {
      margin: 10px 0;
      flex-wrap: wrap;
      justify-content: center;
    }
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
  width: 900px;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    height: 65%;
  }

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

    @media (max-width: 768px) {
      width: 150px;
      height: 120px;
    }

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

      @media (max-width: 768px) {
        display: none;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }

    @media (min-width: 769px) {
      &:hover {
        background-color: var(--secondaryColor);

        img {
          opacity: 0.2;
          z-index: 0;
        }
      }
    }
  }
`;
