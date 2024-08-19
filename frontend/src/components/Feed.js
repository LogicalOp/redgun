import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  CardHeader,
  Avatar,
  Button,
  Title,
  Input, // Replace TextArea with Input
} from "@ui5/webcomponents-react";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import "@ui5/webcomponents-fiori/dist/Assets.js";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

DOMPurify.addHook("uponSanitizeElement", (node, data) => {
  if (data.tagName === "iframe") {
    node.setAttribute("allowfullscreen", "true");
  }
});

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [postValue, setPostValue] = useState("");
  const [likedMessages, setLikedMessages] = useState(new Set());
  const [titleValue, setTitleValue] = useState("");
  const currentUser = localStorage.getItem("inumber");

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

  const reloadFeed = () => {
    // Logic to reload the feed
    // For example, fetch the posts from the server and update the state
    fetchPosts();
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
  }, []);

  useEffect(() => {
    const intervalId = setInterval(fetchPosts, 1000);
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const likeMessage = async (messageId) => {
    try {
      if(likedMessages.has(messageId)) {
        return; // Don't allow liking the same message multiple times
      }
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/likes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message_id: messageId,
            inumber: currentUser,
            isLiked: true,
          }),
        }
      );
      if (response.ok) {
        setLikedMessages((prevLikedMessages) => new Set(prevLikedMessages).add(messageId));
        reloadFeed();
      }
    } catch (error) {
      console.error("Failed to like message:", error);
    }
  };

  // Function to strip HTML tags
  const stripHtmlTags = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
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
      reloadFeed();
    } catch (error) {
      console.error("Failed to post:", error);
    }
  };

  return (
    <Card
      header={<CardHeader titleText={"Feed"} />}
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
            height: "50vh",
            width: "40vw",
            padding: "1vw",
          }}
        >
          {posts.map((post, index) => (
            <Card
              key={index}
              style={{
                wordWrap: "normal",
                position: "relative",
                paddingBottom: "1vh",
                maxWidth: "100%",
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
                  onClick={() => likeMessage(post.message_id)}
                  style={{ cursor: "pointer", padding: "0.5rem" }} // Add padding for easier clicking and cursor pointer for visual feedback
                ></ui5-icon>
              </div>
              <Title
                level="H5"
                style={{ textAlign: "left", marginLeft: "2rem" }}
              >
                {post.title}
              </Title>
              <p
                style={{
                  textAlign: "left",
                  whiteSpace: "pre-wrap",
                  margin: "1rem",
                }}
              >
                {parse(
                  DOMPurify.sanitize(post.message, {
                    ADD_TAGS: ["iframe", "blockquote", "pre"],
                    ADD_ATTR: [
                      "allowfullscreen",
                      "frameborder",
                      "src",
                      "class",
                      "spellcheck",
                    ],
                  })
                )}
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
            height: "25vh",
          }}
        >
          <Input
            value={titleValue}
            onInput={(e) => setTitleValue(e.target.value)}
            style={{ width: "100%", marginBottom: "4px" }} // Reduce flexGrow to make Input smaller
            placeholder="Title"
            maxlength={50}
          />
          <ReactQuill
            value={postValue}
            onChange={setPostValue}
            style={{ width: "100%", height: "6.5rem", marginBottom: "5rem" }} // Allow ReactQuill to grow
            placeholder="Description"
            modules={{
              toolbar: [
                
                [{ header: [1, 2, false] }],
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["blockquote", "code-block"],
                ["link", "image", "video"],
              ],
            }}
            formats={[
              "header",
              "bold",
              "italic",
              "underline",
              "list",
              "bullet",
              "blockquote",
              "code-block",
              "link",
              "image",
              "video",
            ]}
          />
          <span style={{ position: "absolute", bottom: "15px", right: "10px" }}>
            {stripHtmlTags(postValue).length}/200
          </span>
        </div>

        <Button onClick={handlePost} style={{ margin: "2rem" }}>
          Post
        </Button>
      </div>
      <style>
        {`
        .ql-syntax {
          background-color: #000000;
          padding: 10px;
          margin: 2em;
          border-radius: 3px;
          color: #ffffff; 
          font-family: 'Courier New', Courier, monospace;
          text-indent: 2em;
        }
        blockquote {
          background-color: #f0f0f0;
          padding: 10px;
          border-left: 5px solid #ccc;
          quotes: "\\201C""\\201D""\\2018""\\2019";
        }
        blockquote:before {
          content: open-quote;
        }
        blockquote:after {
          content: close-quote;
        }
      `}
      </style>
    </Card>
  );
};

export default Feed;
