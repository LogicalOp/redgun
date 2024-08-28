import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Card, CardHeader, Avatar, Button } from "@ui5/webcomponents-react";
import PerfectScrollbar from "react-perfect-scrollbar";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import "@ui5/webcomponents-fiori/dist/Assets.js";

DOMPurify.addHook("uponSanitizeElement", (node, data) => {
  if (data.tagName === "iframe") {
    node.setAttribute("allowfullscreen", "true");
  }
});

const MessageFeed = () => {
  const { userId } = useParams();
  const selectedChat = localStorage.getItem("selectedChat") || "defaultChatId";
  const effectiveUserId = userId || selectedChat;

  const [messages, setMessages] = useState([]);
  const [postValue, setPostValue] = useState("");
  const currentUser = localStorage.getItem("inumber");

  console.log(messages);

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

  const fetchMessages = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_MESSAGES_URL
        }/messages?senderId=${localStorage.getItem(
          "inumber"
        )}&receiverId=${effectiveUserId}`
      );
      if (!response.ok) throw new Error("Network response was not ok.");
      const data = await response.json();
      setMessages(data.messages);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(fetchMessages, 1000);
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [effectiveUserId]);

  useEffect(() => {
    if (scrollbarRef.current) {
      const scrollContainer = scrollbarRef.current._container;
      if (scrollContainer) {
        const scrollHeight = scrollContainer.scrollHeight;
        const clientHeight = scrollContainer.clientHeight;
        const scrollPosition = scrollHeight - clientHeight;
        scrollContainer.scrollTop = scrollPosition;
      }
    }
  }, [postValue]);

  useEffect(() => {
    if (scrollbarRef.current) {
      const scrollContainer = scrollbarRef.current._container;
      if (scrollContainer) {
        const scrollHeight = scrollContainer.scrollHeight;
        const clientHeight = scrollContainer.clientHeight;
        const scrollPosition = scrollHeight - clientHeight;
        scrollContainer.scrollTop = scrollPosition;
      }
    }
  }, []);

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "Enter") {
        handlePost();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [postValue]);

  const likeMessage = async (messageId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_MESSAGES_URL}/likes`,
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
    } catch (error) {
      console.error("Failed to like message:", error);
    }
  };

  const handlePost = async () => {
    if (postValue.trim() === "") {
      return; // Don't allow empty posts
    }

    try {
      const newPost = {
        sender: currentUser,
        recipient: effectiveUserId,
        message: postValue,
      };

      const response = await fetch(
        `${process.env.REACT_APP_MESSAGES_URL}/messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        }
      );

      const contentType = response.headers.get("content-type");
      let data;
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (!response.ok) throw new Error("Network response was not ok.");

      setPostValue("");
      fetchMessages(); // Fetch the updated list of messages
    } catch (error) {
      console.error("Failed to post:", error);
    }
  };

  const getCardAlignment = (inumber) => {
    if (inumber === currentUser) {
      return "flex-end";
    } else {
      return "flex-start";
    }
  };

  return (
    <Card
      header={<CardHeader titleText={"Chat with " + effectiveUserId} />}
      style={{ marginLeft: "2vw", height: "80vh" }}
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
            width: "50vw",
            padding: "1vw",
          }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: getCardAlignment(message.sender),
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
                    titleText={message.sender}
                    subtitleText={formatDate(message.date)}
                    avatar={<Avatar initials={`${message.sender_first_name.charAt(0)}${message.sender_last_name.charAt(0)}`} />}
                    />
                  <ui5-icon
                    name={message.isliked ? "heart" : "heart-2"}
                    onClick={() => likeMessage(message.message_id)}
                    style={{ cursor: "pointer", padding: "0.5rem" }}
                  ></ui5-icon>
                </div>

                <p
                  style={{
                    textAlign: "left",
                    whiteSpace: "pre-wrap",
                    margin: "1rem",
                  }}
                >
                  {parse(
                    DOMPurify.sanitize(message.message, {
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "15vh",
          }}
        >
          <ReactQuill
            value={postValue}
            onChange={setPostValue}
            style={{ width: "100%" }}
            placeholder="Description"
            modules={{
              toolbar: [
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["blockquote", "code-block"],
                ["link", "image", "video"],
              ],
            }}
            formats={[
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

export default MessageFeed;