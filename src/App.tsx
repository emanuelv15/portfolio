import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./styles/global";

import { Routes } from "./routes";

export function App() {
  const [theme, setTheme] = useState(false);

  const light = {
    background: "#E1E5EA",
    mainColor: "#DA7F8F",
    secondaryColor: "#A7BBC7",
    tertiaryColor: "#FAF3F3",
  };

  const dark = {
    background: "#222831",
    mainColor: "#EEEEEE",
    secondaryColor: "#F05454",
    tertiaryColor: "#393E46",
  };

  return (
    <>
      <GlobalStyle theme={theme === true ? dark : light} />
      <Router>
        <Routes theme={theme} setTheme={setTheme} />
      </Router>
    </>
  );
}
