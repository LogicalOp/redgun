import React, { useRef, useState, forwardRef, useImperativeHandle, } from 'react';
import {  Form,
    Input,
    Label,
    TextArea,
    FormGroup,
    FormItem,
    TimePicker,
    Button,
    Card,
    CardHeader,
    Dialog,
    Bar,
    Icon,
    Popover} from '@ui5/webcomponents-react';


const AddCustomCode = forwardRef((props, ref) => {
  const popoverRef = useRef();
  const [selectedColor, setSelectedColor] = useState(null);

  const onButtonClick = (e) => {
    if (popoverRef.current) {
      popoverRef.current.showAt(e.target);
    }
  };

  const onColorSelect = (e) => {
    console.log('Color select event:', e);
    const selectedColorValue = e.detail.color;
    console.log('Color selected:', selectedColorValue);
    setSelectedColor(selectedColorValue);
  };



  return (
    <>
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
      <Popover ref={popoverRef} onItemClick={onColorSelect} style={{width:'40%',height:'40%'}} placementType='Left'>
      <Card style={{ width: "100%" }}
      ref={popoverRef}
      onItemClick={{}}>
          
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
      </Popover>
    </>
  );
});

export default AddCustomCode;