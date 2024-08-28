import React, { useEffect, useState } from "react";
import { Card, CardHeader } from "@ui5/webcomponents-react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const NewsCard = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/news`);
      if (!response.ok) throw new Error("Network response was not ok.");
      const data = await response.json();
      setNews(data.Articles);
    } catch (err) {
      console.error("Failed to fetch news:", err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Card>
      <CardHeader
          level="H4"
          titleText={"News"}
          style={{ margin: "2rem" }}
        />
      <Carousel responsive={responsive}>
        {news.map((article, index) => (
          <div
            key={index}
            style={{
              margin: "10px",
              backgroundImage: `url(${article.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              cursor: "pointer",
              position: "relative",
              height: "300px", // Adjust height as needed
              display: "flex",
              alignItems: "flex-end",
              color: "white",
              boxSizing: "border-box",
              borderRadius: "15px", // Rounded corners
              overflow: "hidden", // Ensure content respects border radius
            }}
            onClick={() =>
              window.open(article.link, "_blank", "noopener noreferrer")
            }
          >
            <div
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                width: "100%",
                height: "100%",
                textAlign: "left",
              }}
            >
              <div style={{ padding: "1rem" }}>
                <h3>{article.title}</h3>
                <p>{`${article.author} - ${article.date}`}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </Card>
  );
};

export default NewsCard;