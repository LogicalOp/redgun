import React from 'react';
import { Card, CardHeader } from '@ui5/webcomponents-react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

  const cardStyle = {
    minHeight: "10rem",
    overflow: "hidden",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "15px",
    cursor: "pointer", // Add cursor pointer to indicate clickable area
  };

  const overlayStyle = {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "3rem",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const redirectUrl = "https://communicationhub-system-redirect.cfapps.eu10.hana.ondemand.com/redirect?comm_hub_redirect_url_=https%3A%2F%2Fsway.cloud.microsoft%2FQunU5Kn92sKnLBuB%3Fref%3DLink&comm_hub_field_id_=A25879131EE7601FAA751F4B02D5D7D2";

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
        <div style={{ margin: ".5rem" }}>
          <Card
            style={{ ...cardStyle, backgroundImage: "url('https://picsum.photos/2000/3000?random=3')" }}
            onClick={() => window.open(redirectUrl, "_blank", "noopener noreferrer")}
          >
            <div style={overlayStyle}>Vikash Sharma</div>
          </Card>
        </div>
        <div style={{ margin: ".5rem" }}>
          <Card
            style={{ ...cardStyle, backgroundImage: "url('https://picsum.photos/2000/3000?random=4')" }}
            onClick={() => window.open(redirectUrl, "_blank", "noopener noreferrer")}
          >
            <div style={overlayStyle}>Susanne Speicher</div>
          </Card>
        </div>
        <div style={{ margin: ".5rem" }}>
          <Card
            style={{ ...cardStyle, backgroundImage: "url('https://picsum.photos/2000/3000?random=6')" }}
            onClick={() => window.open(redirectUrl, "_blank", "noopener noreferrer")}
          >
            <div style={overlayStyle}>Steffen Thibaut</div>
          </Card>
        </div>
        <div style={{ margin: ".5rem" }}>
          <Card
            style={{ ...cardStyle, backgroundImage: "url('https://picsum.photos/2000/3000?random=5')" }}
            onClick={() => window.open(redirectUrl, "_blank", "noopener noreferrer")}
          >
            <div style={overlayStyle}>Sunday Okeke</div>
          </Card>
        </div>
      </Carousel>
    </Card>
  );
};

export default MVPCard;