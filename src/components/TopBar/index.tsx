import { Person, Mail } from "@material-ui/icons";
import { Dispatch, SetStateAction } from "react";

import {
  Container,
  Wrapper,
  Left,
  Right,
  Logo,
  ItemContainer,
  Hamburger,
} from "./styles";

interface TopBarProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export function TopBar({ menuOpen, setMenuOpen }: TopBarProps) {
  return (
    <Container className={"" + (menuOpen && "active")}>
      <Wrapper>
        <Left>
          <Logo href="#intro" onClick={() => setMenuOpen(false)}>
            emanuelv15
          </Logo>
          <ItemContainer>
            <Person className="icon" />
            <span>+55 (031) 9 8348-1992</span>
          </ItemContainer>
          <ItemContainer>
            <Mail className="icon" />
            <span>emanuel.v.souza@hotmail.com</span>
          </ItemContainer>
        </Left>
        <Right>
          <Hamburger
            className={"" + (menuOpen && "active")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        </Right>
      </Wrapper>
    </Container>
  );
}
