import { Dispatch, SetStateAction } from "react";
import { Container, List } from "./styles";

interface PortfolioListProps {
  item: { id: string; title: string };
  active: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
}

export function PortfolioList({
  item,
  active,
  setSelected,
}: PortfolioListProps) {
  return (
    <Container>
      <List
        className={active ? "active" : ""}
        onClick={() => setSelected(item.id)}
      >
        {item.title}
      </List>
    </Container>
  );
}
