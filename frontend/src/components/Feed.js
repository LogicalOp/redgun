import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  CardHeader,
  List,
  Avatar,
  Button,
  TextArea,
} from "@ui5/webcomponents-react";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [postValue, setPostValue] = useState("");
  const endOfPostsRef = useRef(null); // Step 1: Create a ref

  const [scrollToBottom, setScrollToBottom] = useState(false);

  const handlePost = () => {
    if (postValue.trim() === "") {
      // Don't allow empty posts
      return;
    }

    if (postValue.length > 200) {
      // Don't allow posts longer than 200 characters
      alert("Post is too long!");
      return;
    }

    const now = new Date();
    const timestamp = now.toLocaleString("en-UK", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      day: "numeric",
      month: "numeric",
      year: "2-digit",
    });

    const newPost = {
      text: postValue,
      author: "John Doe", // Replace with the actual author
      timestamp: timestamp,
    };

    setPosts([...posts, newPost]); // Add newPost at the end of the posts array
    setPostValue("");
    setScrollToBottom(true); // Trigger scroll after post is added
  };

  useEffect(() => {
    if (scrollToBottom && endOfPostsRef.current) {
      endOfPostsRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollToBottom(false); // Reset scroll trigger
    }
  }, [scrollToBottom]); // Depend on scrollToBottom to trigger scroll

  return (
    <Card
      header={<CardHeader titleText={"Feed"} />}
      style={{ marginLeft: "7vw", marginTop: "5vh" }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            height: "50vh",
            width: "40vw",
            overflowY: "auto",
            padding: "1vw",
            paddingBottom: "15vh",
          }}
        >
          {posts.map((post, index) => (
            <Card
              key={index}
              header={
                <CardHeader
                  titleText={post.author}
                  subtitleText={post.timestamp}
                  avatar={
                    <Avatar
                      initials={`${post.author.split(" ")[0][0]}${
                        post.author.split(" ")[
                          post.author.split(" ").length - 1
                        ][0]
                      }`}
                    />
                  }
                />
              }
              style={{
                wordWrap: "normal",
                position: "relative",
                paddingBottom: "1vh",
                maxWidth: "100%", // Ensure the Card does not exceed the width of its container
              }}
            >
              <List>
                <p
                  style={{
                    textAlign: "left",
                    whiteSpace: "pre-wrap",
                    margin: "1rem",
                  }}
                >
                  {post.text}
                </p>
              </List>
            </Card>
          ))}
          <div ref={endOfPostsRef} /> {/* Reference point for scrolling */}
        </div>
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
            height: "10vh",
          }}
        >
          <TextArea
            value={postValue}
            onInput={(e) => setPostValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.ctrlKey && e.key === "Enter") {
                handlePost();
              }
            }}
            style={{ width: "100%", height: "100%" }}
            placeholder="Lorem Ipsum"
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
