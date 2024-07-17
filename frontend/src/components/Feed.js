import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  CardHeader,
  List,
  Avatar,
  Button,
  TextArea,
  Title,
} from "@ui5/webcomponents-react";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [postValue, setPostValue] = useState("");
  const [titleValue, setTitleValue] = useState("");

  const scrollbarRef = useRef(null);

  // Function to fetch posts
  const fetchPosts = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/feed`);
      if (!response.ok) throw new Error("Network response was not ok.");
      const data = await response.json();
      setPosts(data.feed); // Assuming the response data is the array of posts
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Modified handlePost function
  const handlePost = async () => {
    if (postValue.trim() === "") {
      return; // Don't allow empty posts
    }

    try {
      const newPost = {
        title: titleValue, // Replace with dynamic data if needed
        message: postValue, // Using postValue from the state
        inumber: "I12345", // Replace with dynamic data if needed
      };

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/feed`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        }
      );

      if (!response.ok) throw new Error("Network response was not ok.");

      const data = await response.json();
      console.log(data);

      setPostValue(""); // Clear the input field
      setTitleValue("");
      fetchPosts(); // Fetch the updated list of posts
    } catch (error) {
      console.error("Failed to post:", error);
    }
  };

  return (
    <Card
      header={<CardHeader titleText={"Feed"} />}
      style={{ marginLeft: "7vw", marginTop: "5vh" }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PerfectScrollbar
          ref={scrollbarRef}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            height: "50vh",
            width: "40vw",
            padding: "1vw",
            paddingBottom: "15vh",
          }}
        >
          {posts.map((post, index) => (
            <Card
              key={index}
              header={
                <CardHeader
                  titleText={post.inumber}
                  subtitleText={post.date}
                  avatar={
                    <Avatar
                      /*initials={`${post.author.split(" ")[0][0]}${
                        post.author.split(" ")[post.author.split(" ").length - 1][0]
                      }`}*/
                      initials="DG"
                    />
                  }
                />
              }
              style={{
                wordWrap: "normal",
                position: "relative",
                paddingBottom: "1vh",
                maxWidth: "100%",
              }}
            >
              <Title level="H5" alignItems="left">
                {post.title}
              </Title>
              <p
                style={{
                  textAlign: "left",
                  whiteSpace: "pre-wrap",
                  margin: "1rem",
                }}
              >
                {post.message}
              </p>
            </Card>
          ))}
        </PerfectScrollbar>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bottom: "1vh",
          marginLeft: "10%",
          width: "90%",
          backgroundColor: "#fff",
          paddingTop: "1vh",
          paddingBottom: "1vh",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "30vw",
            display: "flex", // Use flex layout
            flexDirection: "column", // Stack children vertically
            justifyContent: "space-between", // Distribute space evenly
            height: "15vh",
          }}
        >
          <TextArea
            value={titleValue}
            onInput={(e) => setTitleValue(e.target.value)}
            style={{ width: "100%", flexGrow: 1, marginBottom: "4px" }} // Allow TextArea to grow, adjust marginBottom as needed
            placeholder="Title"
            maxlength={50}
          />
          <TextArea
            value={postValue}
            onInput={(e) => setPostValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.ctrlKey && e.key === "Enter") {
                handlePost();
              }
            }}
            style={{ width: "100%", flexGrow: 2 }} // Allow TextArea to grow
            placeholder="Description"
            maxlength={200}
          />
          <span style={{ position: "absolute", bottom: "5px", right: "10px" }}>
            {postValue.length}/200
          </span>
        </div>

        <Button onClick={handlePost} style={{ margin: "2rem" }}>
          Post
        </Button>
      </div>
    </Card>
  );
};

export default Feed;
