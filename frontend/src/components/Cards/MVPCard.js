import React from "react";
import { Card, CardHeader } from "@ui5/webcomponents-react";
import Carousel from "react-multi-carousel";

const MVPCard = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
  };

  return (
    <Card
      header={
        <CardHeader
          level="H4"
          titleText={"This month's MVPs"}
          style={{ margin: "2rem" }}
        />
      }
    >
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div style={{ margin: "0 10px" }}>
          <Card style={{ minHeight: "10rem", overflow: "hidden" }}>
            <img
              src="https://picsum.photos/2000/3000?random=3"
              alt="News 1"
              style={{ width: "100%", height: "10rem", objectFit: "cover" }}
            />
          </Card>
        </div>
        <div style={{ margin: "0 10px" }}>
          <Card style={{ minHeight: "10rem", overflow: "hidden" }}>
            <img
              src="https://picsum.photos/2000/3000?random=4"
              alt="News 2"
              style={{ width: "100%", height: "10rem", objectFit: "cover" }}
            />
          </Card>
        </div>
        <div style={{ margin: "0 10px" }}>
          <Card style={{ minHeight: "10rem", overflow: "hidden" }}>
            <img
              src="https://picsum.photos/2000/3000?random=5"
              alt="News 1"
              style={{ width: "100%", height: "10rem", objectFit: "cover" }}
            />
          </Card>
        </div>
        <div style={{ margin: "0 10px" }}>
          <Card style={{ minHeight: "10rem", overflow: "hidden" }}>
            <img
              src="https://picsum.photos/2000/3000?random=6"
              alt="News 2"
              style={{ width: "100%", height: "10rem", objectFit: "cover" }}
            />
          </Card>
        </div>
      </Carousel>
    </Card>
  );
};

export default MVPCard;
