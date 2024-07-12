import React, { useState } from "react";
import { Card, Avatar, Button, TextArea } from "@ui5/webcomponents-react";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [postValue, setPostValue] = useState("");

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
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxHeight: "37vh", // Adjust this value as needed
            width: "70vw",
            overflowY: "auto",
            marginLeft: "20%",
            paddingRight: "1vw",
            marginBottom: "12vh",
            paddingTop: "2vh",
            paddingLeft: "1vw",
          }}
        >
          {posts.map((post, index) => (
            <Card
              key={index}
              style={{ wordWrap: "break-word", position: "relative" }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar image="https://robohash.org/JohnDoe" />
                <span style={{ marginLeft: "2vw" }}>{post.author}</span>
              </div>
              <p style={{ wordWrap: "break-word" }}>{post.text}</p>
              <p
                style={{
                  position: "absolute",
                  bottom: "0",   
                  right: "0",
                  color: "grey",
                  marginRight: "1vw",
                  marginBottom: "1vh",
                }}
              >
                {post.timestamp}
              </p>
            </Card>
          ))}
        </div>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          bottom: "1vh",
          marginLeft: '10%',
          width: "100%",
          backgroundColor: "#fff", // Add a background color to cover content behind
          paddingTop: "1vh",
          paddingBottom: "1vh",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "70vw",
            height: "10vh"
          }}
        >
          <TextArea
            value={postValue}
            onInput={(e) => setPostValue(e.target.value)}
            style={{ width: "100%", height: "100%" }}
          />
          <span style={{ position: "absolute", bottom: "5px", right: "10px" }}>
            {postValue.length}/200
          </span>
        </div>
        <Button onClick={handlePost}>Post</Button>
      </div>
    </>
  );
};

export default Feed;
