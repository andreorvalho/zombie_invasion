import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const LocationForm = ({ survivor, onSave }) => {
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
        <Label for="survivor-latitude">Latitude</Label>
        <Input
          type="text"
          id="survivor-latitude"
          name="latitude"
          value={item.latitude}
          onChange={handleChange}
          placeholder="Enter Survivor's Latitude"
        />
      </FormGroup>
      <FormGroup>
        <Label for="survivor-longitude">Longitude</Label>
        <Input
          type="text"
          id="survivor-longitude"
          name="longitude"
          value={item.longitude}
          onChange={handleChange}
          placeholder="Enter Survivor's Longitude"
        />
      </FormGroup>
      <Button color="success" onClick={() => onSave(item)} data-cy="save-button">
        Save
      </Button>
    </Form>
  );
};

export default LocationForm;
