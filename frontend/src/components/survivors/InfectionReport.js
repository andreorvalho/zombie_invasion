import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const API_URL = "/api/survivors/";

const LocationForm = () => {
  var [survivors, setSurvivors] = useState([]);
  var [formErrors, setformErrors] = useState([]);
  var [successMessage, setsuccessMessage] = useState(null);

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = () => {
    axios
      .get(API_URL)
      .then((res) => setSurvivors(res.data))
      .catch((err) => {
        if (err.response.status === 500) {
          setformErrors({ api: ['The API is down']});
        }
        else {
          console.log(err.response.data);
          setformErrors(err.response.data);
        }
      });
  };

  return (
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
        <Label for="exampleSelect">
          Reporter
        </Label>
        <Input id="reporter" name="select" type="select">
          {survivors.map(element => (<option>{element.name}</option>))}
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="exampleSelect">
          Reported
        </Label>
        <Input id="reported" name="select" type="select">
          {survivors.map(element => (<option>{element.name}</option>))}
        </Input>
      </FormGroup>
     </Form>
  );
};


export default LocationForm;
