import styled from "styled-components";

export const Container = styled.div``;

export const List = styled.li`
  font-size: 13px;
  font-weight: 400;
  color: var(--mainColor);
  margin-right: 50px;
  padding: 7px;
  border-radius: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-right: 10px;
  }

  &.active {
    background-color: var(--secondaryColor);
    color: var(--mainColor);
    font-weight: 600;
  }
`;
