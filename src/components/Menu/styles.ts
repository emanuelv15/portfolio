import styled from "styled-components";

export const Container = styled.div`
  width: 0px;
  height: 100vh;
  background-color: var(--secondaryColor);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1.5s ease;

  &.active {
    width: 200px;
    box-shadow: 0px 0px 15px 3px var(--tertiaryColor);

    @media (max-width: 768px) {
      width: 130px;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 22px;
    font-weight: 400;
    width: 65%;

    @media (max-width: 768px) {
      font-size: 20px;
      font-weight: 500;
    }

    li {
      margin-bottom: 25px;

      a {
        font-size: inherit;
        color: var(--tertiaryColor);
      }

      @media (min-width: 769px) {
        &:hover {
          font-weight: 500;
        }
      }
    }
  }
`;
