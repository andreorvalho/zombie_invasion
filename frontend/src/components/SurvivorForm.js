import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const SurvivorForm = ({ survivor, onSave }) => {
  var [item, setItem] = useState(survivor);

  const handleChange = (e) => {
    let { name, value } = e.target;

    const updatedItem = { ...item, [name]: value };
    setItem(updatedItem);
  };

  if (!item) {
    return null;
  }

  return(
    <Form>
      <FormGroup>
        <Label for="survivor-name">Name</Label>
        <Input
          type="text"
          id="survivor-name"
          name="name"
          value={item.name}
          onChange={handleChange}
          placeholder="Enter Survivor's Name"
        />
      </FormGroup>
      <FormGroup>
        <Label for="survivor-age">Age</Label>
        <Input
          type="text"
          id="survivor-age"
          name="age"
          value={item.age}
          onChange={handleChange}
          placeholder="Enter Survivor's Age"
        />
      </FormGroup>
      <FormGroup>
        <Label for="survivor-gender">Gender</Label>
        <Input
          type="text"
          id="survivor-gender"
          name="gender"
          value={item.gender}
          onChange={handleChange}
          placeholder="Enter Survivor's Gender"
        />
      </FormGroup>
      <FormGroup>
        <Label for="survivor-latitude">Latitude</Label>
        <Input
          type="text"
          id="survivor-latitude"
          name="latitute"
          value={item.latitude}
          onChange={handleChange}
          placeholder="Enter Survivor's Latitude"
        />
      </FormGroup>
      <FormGroup>
        <Label for="survivor-longitute">Longitute</Label>
        <Input
          type="text"
          id="survivor-longitute"
          name="longitude"
          value={item.longitute}
          onChange={handleChange}
          placeholder="Enter Survivor's Longitute"
        />
      </FormGroup>
      <Button
        color="success"
        onClick={() => onSave(item)}
      >
        Save
      </Button>
    </Form>
  );
};

export default SurvivorForm;
