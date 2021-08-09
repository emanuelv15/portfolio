import { useState, useEffect } from "react";

import {
  frontPortfolio,
  mobilePortfolio,
  backPortfolio,
  otherPortfolio,
} from "../../services/data";
import { PortfolioList } from "../PortfolioList";

import { Container, ContainerItem } from "./styles";

interface Data {
  id: number;
  title: string;
  git?: string;
  img: string;
}

export function Portfolio() {
  const [selected, setSelected] = useState("front");
  const [data, setData] = useState<Data[]>([] as Data[]);
  const [nextPage, setNextPage] = useState(6);
  const [previousPage, setPreviousPage] = useState(0);

  const list = [
    // { id: "featured", title: "Featured" },
    { id: "front", title: "Frontend" },
    { id: "mobile", title: "Mobile" },
    { id: "back", title: "Backend" },
    { id: "other", title: "Others" },
  ];

  useEffect(() => {
    switch (selected) {
      case "front":
        setData(frontPortfolio);
        setNextPage(6);
        setPreviousPage(0);
        break;
      case "mobile":
        setData(mobilePortfolio);
        setNextPage(6);
        setPreviousPage(0);
        break;
      case "back":
        setData(backPortfolio);
        setNextPage(6);
        setPreviousPage(0);
        break;
      case "other":
        setData(otherPortfolio);
        setNextPage(6);
        setPreviousPage(0);
        break;
    }
  }, [selected]);

  function handlePreviousPage() {
    setNextPage(nextPage - 6);
    setPreviousPage(previousPage - 6);
  }

  function handleNextPage() {
    setNextPage(nextPage + 6);
    setPreviousPage(previousPage + 6);
  }

  return (
    <Container id="portfolio">
      <h1>Projects</h1>

      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            item={item}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <ContainerItem>
        {data.map((item, index) => {
          if (index < nextPage && index >= previousPage) {
            return (
              <div className="item" key={item.id}>
                <a href={item.git} target="_blank" rel="noreferrer">
                  <img src={item.img} alt="project preview" />
                  <h3>{item.title}</h3>
                </a>
              </div>
            );
          }
          return null;
        })}
      </ContainerItem>
      <div className="containerButton">
        {previousPage > 0 ? (
          <button onClick={() => handlePreviousPage()}>Previous Page</button>
        ) : null}
        {nextPage < data.length ? (
          <button onClick={() => handleNextPage()}>Next Page</button>
        ) : null}
      </div>
    </Container>
  );
}
