import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList.jsx";
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio
} from "../../data.js";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Full Stack",
    },
    {
      id: "mobile",
      title: "SPA",
    },
    {
      id: "design",
      title: "Static",
    },
    {
      id: "content",
      title: "CMS",
    }
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
      default:
        setData(featuredPortfolio);
    }
  }, [selected])
  return (
    <div className="portfolio" id="portfolio" >
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            text={item.text}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            link={item.link}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(d => (
          <a href="{d.link}">
            <div className="item">
              <img src={d.img} alt="my website" />
              <h3>{d.title}</h3>
              <p>{d.text}</p>
              
            </div>
          </a>


        ))}

      </div>
      <div className="directLink">
        <h3>Under Construction: Direct links</h3>
        <ul>
          <li> <a href="https://lenganthanh.github.io/final_inspiration_jam/index.html" target="_blank" rel="noreferrer">DCI Jam Hackathon</a></li>
          <li><a href="https://www.leipzigg.com/" target="_blank" rel="noreferrer">www.Leipzigg.com</a></li>
          <li><a href="https://leipzig-wardrobe-react.vercel.app/" target="_blank" rel="noreferrer">SPA Leipzig Wardrobe</a></li>
          <li><a href="https://laurafromleeds.weebly.com/" target="_blank" rel="noreferrer">English Teacher 2014</a></li>
          <li><a href="https://laurahesse.wordpress.com/laurafromleeds/" target="_blank" rel="noreferrer">English teacher 2019</a></li>
        </ul>
      </div>
    </div>
  )
}
