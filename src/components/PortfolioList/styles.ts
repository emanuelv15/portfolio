import styled from "styled-components";

export const Container = styled.div``;

export const List = styled.li`
  font-size: 12px;
  color: black;
  margin-right: 50px;
  padding: 7px;
  border-radius: 10px;
  cursor: pointer;

  &.active {
    background-color: var(--mainColor);
    color: white;
  }
`;
