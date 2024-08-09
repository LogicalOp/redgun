import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Card,
  CardHeader,
  Avatar,
  Button,
  Title,
} from "@ui5/webcomponents-react";
import PerfectScrollbar from "react-perfect-scrollbar";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import "@ui5/webcomponents-fiori/dist/Assets.js";

const MessageFeed = () => {
  const [posts, setPosts] = useState([]);
  const [postValue, setPostValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [otherUser, setOtherUser] = useState("I123");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.toLocaleDateString("default", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const time = date.toLocaleTimeString("default", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${day}, ${time}`;
  };

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

  const fetchMessages = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_MESSAGES_URL}/messages/I123`);
      if (!response.ok) throw new Error("Network response was not ok.");
      const data = await response.json();
      console.log("Fetched messages:", data); // Print the fetched messages to the console
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  };

  useEffect(() => {
    if (scrollbarRef.current) {
      // Assuming PerfectScrollbar exposes a method to scroll to the bottom or you can directly manipulate its scroll position
      const scrollContainer = scrollbarRef.current._container; // Access the underlying container of the PerfectScrollbar
      if (scrollContainer) {
        const scrollHeight = scrollContainer.scrollHeight;
        const clientHeight = scrollContainer.clientHeight;
        const scrollPosition = scrollHeight - clientHeight;
        scrollContainer.scrollTop = scrollPosition; // Scroll to the bottom
      }
    }
  }, [posts]);

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
    fetchMessages();
  }, []);

  const toggleHeart = async (postId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/feed/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ postId }),
        }
      );

      if (!response.ok) throw new Error("Network response was not ok.");

      const data = await response.json();
      console.log(data);

      fetchPosts(); // Fetch the updated list of posts
    } catch (error) {
      console.error("Failed to like post:", error);
    }
  };

  // Modified handlePost function
  const handlePost = async () => {
    if (postValue.trim() === "") {
      return; // Don't allow empty posts
    }

    try {
      const newPost = {
        title: titleValue, // Replace with dynamic data if needed
        message: postValue, // Using postValue from the state
        inumber: localStorage.getItem("inumber"), // Replace with dynamic data if needed
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

  const getCardAlignment = (inumber) => {
    if (inumber === "I123") {
      return "flex-start"; // Align to the left
    } else if (inumber === "I12345") {
      return "flex-end"; // Align to the right
    }
    return "center"; // Default alignment
  };

  return (
    <Card
      header={<CardHeader titleText={"Chat with " + otherUser} />}
      style={{ marginLeft: "2vw" }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PerfectScrollbar
          ref={scrollbarRef}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            height: "60vh",
            width: "50vw",
            padding: "1vw",
          }}
        >
          {posts.map((post, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: getCardAlignment(post.inumber),
                width: "100%",
              }}
            >
              <Card
                style={{
                  wordWrap: "normal",
                  position: "relative",
                  paddingBottom: "1vh",
                  maxWidth: "60%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <CardHeader
                    titleText={post.inumber}
                    subtitleText={formatDate(post.date)} // Use formatDate here
                    avatar={<Avatar initials="DG" />}
                  />
                  <ui5-icon
                    name={post.isliked ? "heart" : "heart-2"}
                    onClick={() => toggleHeart(post.message_id)}
                    style={{ cursor: "pointer", padding: "0.5rem" }} // Add padding for easier clicking and cursor pointer for visual feedback
                  ></ui5-icon>
                </div>

                <p
                  style={{
                    textAlign: "left",
                    whiteSpace: "pre-wrap",
                    margin: "1rem",
                  }}
                >
                  {parse(DOMPurify.sanitize(post.message))}
                </p>
              </Card>
            </div>
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
          <ReactQuill
            value={postValue}
            onChange={setPostValue}
            style={{ width: "100%" }} // Allow ReactQuill to grow
            placeholder="Description"
            modules={{
              toolbar: [
                [{ header: [1, 2, false] }],
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link"],
              ],
            }}
            formats={[
              "header",
              "bold",
              "italic",
              "underline",
              "list",
              "bullet",
              "link",
            ]}
          />
          <span style={{ position: "absolute", bottom: "15px", right: "10px" }}>
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

export default MessageFeed;