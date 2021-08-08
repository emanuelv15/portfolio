import { useState, useEffect } from "react";

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../services/data";
import { PortfolioList } from "../PortfolioList";

import { Container, ContainerItem } from "./styles";

interface Data {
  id: number;
  title: string;
  img: string;
}

export function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState<Data[]>([] as Data[]);

  const list = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web App" },
    { id: "mobile", title: "Mobile App" },
    { id: "design", title: "Design" },
    { id: "content", title: "Content" },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
    }
  }, [selected]);

  return (
    <Container id="portfolio">
      <h1>Portfolio</h1>

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
        {data.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt="project preview" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </ContainerItem>
    </Container>
  );
}
