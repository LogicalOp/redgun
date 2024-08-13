import React, { useState, forwardRef } from 'react';
import {
  Form,
  Input,
  Label,
  TextArea,
  FormGroup,
  FormItem,
  Button,
  Card,
  Dialog,
  Bar,
  Icon
} from '@ui5/webcomponents-react';

const AddCustomCode = forwardRef((props, ref) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [description, setDescription] = useState('');
  const [solution, setSolution] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const onButtonClick = () => {
    setDialogOpen(true);
  };

  const onDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSubmit = async () => {
    // Construct the payload
    const payload = {
      title,
      description,
      solution,
      img_url: imgUrl,
      inumber: localStorage.getItem("inumber"), // Retrieve from localStorage
    };

    console.log('Payload being sent:', payload);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/customcode`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const responseData = await response.json();
      console.log('Response status:', response.status);

      if (response.ok) {
        console.log('Submission successful:', responseData);
        onDialogClose();  // Close dialog on successful submission
        // Optionally clear form fields
        setTitle('');
        setTags('');
        setDescription('');
        setSolution('');
        setImgUrl('');
      } else {
        console.error('Submission failed:', responseData);
      }
    } catch (error) {
      console.error('Error submitting data:', error);
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
          paddingRight: '2.5vw',
          height: "5%",
          width: "5%"
        }}
        onClick={onButtonClick}
      />
      <Dialog
        className="footerPartNoPadding"
        headerText="Add Custom Code"
        footer={<Bar design="Footer" endContent={<Button onClick={onDialogClose}>Close</Button>} />}
        open={dialogOpen}
        onAfterClose={onDialogClose}
        style={{ width: '25%' }}
      >
        <Card style={{ width: "100%" }}>
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
            style={{ paddingLeft: '20px', paddingRight: '20px' }}
          >
            <FormGroup>
              <FormItem label={<Label>Title</Label>}>
                <Input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormItem>
              <FormItem label={<Label>Tags</Label>}>
                <Input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </FormItem>
              <FormItem label={<Label>Description</Label>}>
                <TextArea
                  placeholder="Description"
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormItem>
              <FormItem label={<Label>Solution</Label>}>
                <TextArea
                  placeholder="Solution"
                  rows={5}
                  value={solution}
                  onChange={(e) => setSolution(e.target.value)}
                />
              </FormItem>
              <FormItem label={<Label>Image URL</Label>}>
                <Input
                  type="text"
                  value={imgUrl}
                  onChange={(e) => setImgUrl(e.target.value)}
                />
              </FormItem>
              <FormItem style={{ paddingLeft: "50%" }}>
                <Button onClick={handleSubmit}>
                  Submit
                </Button>
              </FormItem>
            </FormGroup>
          </Form>
        </Card>
      </Dialog>
    </>
  );
});

export default AddCustomCode;
