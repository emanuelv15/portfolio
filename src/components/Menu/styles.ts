import styled from "styled-components";

export const Container = styled.div`
  width: 0px;
  height: 100vh;
  background-color: var(--mainColor);
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
    width: 300px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 30px;
    font-weight: 300;
    width: 60%;

    li {
      margin-bottom: 25px;

      a {
        font-size: inherit;
      }

      &:hover {
        font-weight: 500;
      }
    }
  }
`;
