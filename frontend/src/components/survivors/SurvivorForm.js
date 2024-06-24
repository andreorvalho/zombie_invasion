import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const API_URL = "/api/survivors/";

const SurvivorForm = () => {
  var [item, setItem] = useState({});
  var [formErrors, setformErrors] = useState([]);
  var [successMessage, setsuccessMessage] = useState(null);

  const handleChange = (e) => {
    let { name, value } = e.target;

    const updatedItem = { ...item, [name]: value };
    setItem(updatedItem);
  };

  const handleCreateItem = (item) => {
    setformErrors([]);
    setsuccessMessage(null);
    window.scrollTo(0, 0);

    axios
      .post(API_URL, item)
      .then((res) => {
        console.log(res);
        setsuccessMessage('Created a new survivor with success');
      })
      .catch((err) => {
        if (err.response.status === 500) {
          setformErrors({ api: ['The API is down']});
        }
        else {
          console.log(err.response.data);
          setformErrors(err.response.data);
        }
      });
  }

  console.log(Object.keys(formErrors));

  return(
    <Form>
      {Object.keys(formErrors).length > 0 &&
        <div className="text-danger">
          {Object.keys(formErrors).map(element => (<p>{`${element}: ${formErrors[element].map(a => a).join(', ')}`}</p>))}
        </div>
      }
      {successMessage  &&
        <div className="text-success">
          {successMessage}
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
      <Button data-cy="save-button" color="success" onClick={() => handleCreateItem(item)}>
        Save
      </Button>
    </Form>
  );
};

export default SurvivorForm;
