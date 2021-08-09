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
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 22px;
    font-weight: 400;
    width: 65%;

    li {
      margin-bottom: 25px;

      a {
        font-size: inherit;
        color: var(--tertiaryColor);
      }

      &:hover {
        font-weight: 500;
      }
    }
  }
`;
