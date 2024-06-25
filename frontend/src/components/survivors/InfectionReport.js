import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const SURVIVORS_API_URL = "/api/survivors";
const INFECTION_REPORTS_API_URL = "/api/infection_reports";

const LocationForm = () => {
  var [item, setItem] = useState({});
  var [survivors, setSurvivors] = useState([]);
  var [formErrors, setformErrors] = useState([]);
  var [successMessage, setsuccessMessage] = useState(null);

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = () => {
    axios
      .get(SURVIVORS_API_URL)
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

  const handleChange = (e) => {
    let { name, value } = e.target;

    const updatedItem = { ...item, [name]: value };
    console.log(updatedItem);
    setItem(updatedItem);
  };

  const handleCreateItem = (item) => {
    setformErrors([]);
    setsuccessMessage(null);
    window.scrollTo(0, 0);

    console.log(item);

    axios
      .post(INFECTION_REPORTS_API_URL, item)
      .then((res) => {
        console.log(res);
        setsuccessMessage('Created a new infection report with success');
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
        <Input
          id="infection-reporter"
          name="reporter"
          type="select"
          onChange={handleChange}
        >
          <option value="0">Enter Reporter's ID</option>
          {survivors.map(element => (<option value={element.id}>{element.name}</option>))}
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="exampleSelect">
          Reported
        </Label>
        <Input
          id="infection-reported"
          name="reported"
          type="select"
          onChange={handleChange}
        >
          <option value="0">Enter Reported's ID</option>
          {survivors.map(element => (<option value={element.id}>{element.name}</option>))}
        </Input>
      </FormGroup>
      <Button data-cy="save-button" color="success" onClick={() => handleCreateItem(item)}>
        Save
      </Button>
     </Form>
  );
};


export default LocationForm;
