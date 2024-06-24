import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const SurvivorForm = ({ survivor, onSave, formErrors }) => {
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
      {Object.keys(formErrors).length > 0 &&
        <div id="#asdasd" className="text-danger">
          {Object.keys(formErrors).map(element => (<p>{`${element}: ${formErrors[element].map(a => a).join(', ')}`}</p>))}
        </div>
      }
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
      <FormGroup tag="fieldset">
        <legend>
          Inventory
        </legend>
        <FormGroup>
          <Label for="survivor-water">Water</Label>
          <Input
            type="number"
            id="survivor-water"
            name="water"
            value={item.water}
            onChange={handleChange}
            placeholder="Enter Survivor's Water"
          />
        </FormGroup>
        <FormGroup>
          <Label for="survivor-food">Food</Label>
          <Input
            type="number"
            id="survivor-food"
            name="food"
            value={item.food}
            onChange={handleChange}
            placeholder="Enter Survivor's Food"
          />
        </FormGroup>
        <FormGroup>
          <Label for="survivor-medication">Medication</Label>
          <Input
            type="number"
            id="survivor-medication"
            name="medication"
            value={item.medication}
            onChange={handleChange}
            placeholder="Enter Survivor's Medication"
          />
        </FormGroup>
        <FormGroup>
          <Label for="survivor-ammunition">Ammunition</Label>
          <Input
            type="number"
            id="survivor-ammunition"
            name="ammunition"
            value={item.ammunition}
            onChange={handleChange}
            placeholder="Enter Survivor's Ammunition"
          />
        </FormGroup>
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
