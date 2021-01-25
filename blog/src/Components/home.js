import React from "react";
import Heading from "./header";
import Topics from "./cards";
import SidePanel from "./sidepanel";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  const topics = [
    {
      key: 1,
      slashTitle: "/sports",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/I/412cxLInx8L._AC_SY580_.jpg",
      title: "Sports",
      flavorText: "From Football to HackySack"
    },
    {
      key: 2,
      slashTitle: "/education",
      imageURL:
        "https://builtin.com/sites/default/files/styles/thumbnail/public/2019-04/big-data-education.png",
      title: "Education",
      flavorText: "From Addition to Nuclear Physics"
    },
    {
      key: 3,
      slashTitle: "/tv-shows",
      imageURL:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/teen-shows-1582317535.jpg",
      title: "TV Shows",
      flavorText: "From iCarly to Broke Back Mountain"
    },
    {
      key: 4,
      slashTitle: "/video-games",
      imageURL:
        "https://assets.weforum.org/article/image/5wlXbzjwAITqYYyaeCDcvR5S1QN39afvkA3soHBBv04.jpg",
      title: "Video Games",
      flavorText: "From Animal Crossing to Saints Row"
    },
    {
      key: 5,
      slashTitle: "/investments",
      imageURL:
        "https://specials-images.forbesimg.com/imageserve/5d6ba3db68cb0a0008c1089e/960x0.jpg?fit=scale",
      title: "Investments",
      flavorText: "From Penny Stocks to Losing Daddies Fortune"
    },
    {
      key: 6,
      slashTitle: "/ai",
      imageURL:
        "https://www.surveycto.com/wp-content/uploads/2018/04/ai-and-dev.jpg",
      title: "Artificial Intelligence",
      flavorText: "From Tesla to Taking over the world"
    }
  ];

  return (
    <div>
      <Heading></Heading>
      {/* <Topics></Topics> */}
      <Container fluid>
        <Row>
          <Col sm id="sidebar=wrapper">
            <SidePanel />
          </Col>
          {topics.map((topicItem, index) => {
            return (
              <Col sm>
                <Topics
                  key={index}
                  slashTitle={topicItem.slashTitle}
                  imageURL={topicItem.imageURL}
                  title={topicItem.title}
                  flavorText={topicItem.flavorText}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
