import { WhatsApp, MailOutline } from "@material-ui/icons";
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
            <WhatsApp className="icon" />
            <a
              href="https://api.whatsapp.com/send?phone=55031983481992"
              target="_blank"
              rel="noreferrer"
            >
              <span>+55 (031) 9 8348-1992</span>
            </a>
          </ItemContainer>
          <ItemContainer>
            <MailOutline className="icon" />
            <a href="mailto:emanuel.v.souza@hotmail.com">
              <span>emanuel.v.souza@hotmail.com</span>
            </a>
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
