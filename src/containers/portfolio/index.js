import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import ImageSix from "../../images/image6.jpg";
import "./style.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 1,
    name: "NewsToday",
    image: ImageOne,
    link: " https://github.com/abhisheksingh66/News-Today",
  },
  {
    id: 2,
    name: 'Weather App' ,
    link: "https://github.com/abhisheksingh66/weather-app",
    image: ImageTwo,
  },
  {
    id: 3,
    name: "Word Counter",
    image: ImageSix ,
    link: "https://github.com/abhisheksingh66/Text-Reader",
  },
  {
    id: 4,
    name: "Todo App",
    image: ImageFour,

    link: "https://github.com/abhisheksingh66/TodoList-react",
  },
  {
    id: 5,
    name: "Currency Conveter",
    image: ImageThree ,
    link: "https://github.com/abhisheksingh66/currency-conveter",
  },
  {
    id: 6,
    name: "Oder Up",
    image: ImageFive,
    link: "https://github.com/abhisheksingh66/OrderUp",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" rel="noreferrer" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>

                    <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="home__contact-link"
                >
                <button>Visit</button>
                </a>




                    
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;