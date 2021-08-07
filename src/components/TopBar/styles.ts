import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
  color: var(--mainColor);
  position: fixed;
  top: 0;
  z-index: 3;
  transition: all 1.5s ease;

  &.active {
    background-color: var(--mainColor);
    color: white;
  }
`;

export const Wrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Right = styled.div``;

export const Logo = styled.a`
  font-size: 40px;
  font-weight: 700;
  margin-right: 40px;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;

  .icon {
    font-size: 18px;
    margin-right: 5px;
  }

  span {
    font-size: 15px;
    font-weight: 500;
  }
`;

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  width: 32px;
  height: 25px;

  span {
    width: 100%;
    height: 3px;
    background-color: var(--mainColor);
    transform-origin: left;
    transition: all 1.5s ease;
  }

  &.active {
    span {
      &:first-child {
        background-color: white;
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:last-child {
        background-color: white;
        transform: rotate(-45deg);
      }
    }
  }
`;
