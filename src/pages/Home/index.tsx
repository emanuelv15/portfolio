import { Dispatch, SetStateAction, useState } from "react";

import { Contact } from "../../components/Contact";
import { Intro } from "../../components/Intro";
import { Menu } from "../../components/Menu";
import { Portfolio } from "../../components/Portfolio";
// import { Testimonials } from "../../components/Testimonials";
import { TopBar } from "../../components/TopBar";
import { Works } from "../../components/Works";

import { App, Sections } from "./styles";

interface HomeProps {
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
}

export function Home({ theme, setTheme }: HomeProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <App>
        <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          theme={theme}
          setTheme={setTheme}
        />
        <Sections>
          <Intro />
          <Portfolio />
          <Works />
          {/* <Testimonials /> */}
          <Contact />
        </Sections>
      </App>
    </>
  );
}
