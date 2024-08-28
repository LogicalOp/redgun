import React, { useState, forwardRef } from "react";
import {
  Form,
  Input,
  Label,
  FormGroup,
  FormItem,
  Button,
  Card,
  Dialog,
  Bar,
  Icon,
} from "@ui5/webcomponents-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddCustomCode = forwardRef((props, ref) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [solution, setSolution] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const onButtonClick = () => {
    setDialogOpen(true);
  };

  const onDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSubmit = async () => {
    const payload = {
      title,
      description,
      solution,
      img_url: imgUrl,
      inumber: localStorage.getItem("inumber"),
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/customcode`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        onDialogClose();
        setTitle("");
        setTags("");
        setDescription("");
        setSolution("");
        setImgUrl("");
      } else {
        console.error("Submission failed:", responseData);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <>
      <Icon
        name="add"
        style={{
          position: "absolute",
          right: "10px",
          cursor: "pointer",
          paddingRight: "2.5vw",
          paddingBottom: "2.5vw",
          height: "7%",
          width: "7%",
        }}
        onClick={onButtonClick}
      />
      <Dialog
        className="footerPartNoPadding"
        headerText="Add Custom Code"
        footer={
          <Bar
            design="Footer"
            endContent={<Button onClick={onDialogClose}>Close</Button>}
          />
        }
        open={dialogOpen}
        onAfterClose={onDialogClose}
        style={{ width: "50%", height: "90%" }}
      >
        <Card style={{ width: "100%", height: "100%" }}>
          <Form
            backgroundDesign="Transparent"
            columnsL={1}
            columnsM={1}
            columnsS={1}
            columnsXL={2}
            labelSpanL={4}
            labelSpanM={2}
            labelSpanS={12}
            labelSpanXL={4}
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
          >
            <FormGroup>
              <FormItem label={<Label>Title</Label>} className="form-item">
                <Input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormItem>
              <FormItem label={<Label>Tags</Label>} className="form-item">
                <Input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </FormItem>
              <FormItem label={<Label>Description</Label>} className="form-item">
              <div style={{marginBottom:"3rem"}}>
                <ReactQuill
                  value={description}
                  onChange={setDescription}
                  style={{ height: "200px" }}
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
                </div>
              </FormItem>
              <FormItem label={<Label>Solution</Label>} className="form-item">
              <div style={{ marginBottom:"3rem"}}>
                <ReactQuill
                  value={solution}
                  onChange={setSolution}
                  style={{ height: "200px" }}
                  placeholder="Solution"
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
                </div>
              </FormItem>
              <FormItem className="form-item submit-button">
                <Button onClick={handleSubmit}>Submit</Button>
              </FormItem>
            </FormGroup>
          </Form>
        </Card>
      </Dialog>
      <style>
        {`
        .form-item {
          margin-bottom: 20px;
        }
        .submit-button {
          margin-top: 40px;
          text-align: center;
        }
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
    </>
  );
});

export default AddCustomCode;