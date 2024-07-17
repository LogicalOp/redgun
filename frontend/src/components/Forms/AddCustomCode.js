import React, { useState, useRef,forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, MessageStrip, Card, CardHeader, CheckBox,  Form,
    Label,
    TextArea,
    FormGroup,
    FormItem,
    TimePicker,
    Dialog,
    Bar } from '@ui5/webcomponents-react';
import { Icon } from '@ui5/webcomponents-react';


const AddCustomCode = forwardRef((props, ref) => {
    const popoverRef = useRef();


  const onButtonClick = (e) => {
    if (popoverRef.current) {
      popoverRef.current.showAt(e.target);
    }
  };

  const onAddCode = (e) => {
    console.log('Added Details:', e);
    
  };


   return(
    <Card style={{ width: "100%" }}>
            <Icon
              name="add"
             
              style={{
                position: "absolute",
                right: "10px",
                cursor: "pointer",
                paddingRight:'2.5vw',
                height : "5%",
                width : "5%"
              }}
              onClick={onButtonClick}
             
            />
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
      ref={popoverRef}
      onItemClick={onAddCode}
    >
      <FormGroup>
        <FormItem label={<Label>Title</Label>}>
          <Input type="text" ref={{}} />
        </FormItem>
        <FormItem label={<Label>Tags</Label>}>
          <Input type="text" ref={{}} />
        </FormItem>
       
        <FormItem label={<Label>Description</Label>}>
          <TextArea placeholder="Description" rows={5} ref={{}} />
        </FormItem>
        <FormItem label={<Label>Resolution</Label>}>
          <TextArea placeholder="Description" rows={5} ref={{}} />
        </FormItem>
      
        <FormItem style={{ paddingLeft: "50%" }}>
          <Button type="submit" onClick={{}}>
            Submit
          </Button>
        </FormItem>
      </FormGroup>
    </Form>
    
  </Card>

);
});

export default AddCustomCode;
