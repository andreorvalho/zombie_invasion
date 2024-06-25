
import React, { useState, useEffect } from "react";
import CustomModal from "../CustomModal";
import LocationForm from "./LocationForm";

import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const API_URL = "/api/survivors";

const SurvivorsList = () => {
  var [items, setItems] = useState([]);
  var [modal, setModal] = useState(false);
  var [activeItem, setActiveItem] = useState(null);
  var [formErrors, setformErrors] = useState([]);
  var [successMessage, setsuccessMessage] = useState(null);

  useEffect(() => {
    refreshList();
  }, []);

  const toggle = () => {
    setModal(!modal);
  };

  const refreshList = () => {
    axios
      .get(API_URL)
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  };

  const handleEditItem = (item) => {
    setformErrors([]);
    setsuccessMessage(null);

    axios
      .put(`${API_URL}/${item.id}/`, item)
      .then((res) => {
        setsuccessMessage('Location was updated successfully');
        refreshList();
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

  const handleSubmit = (item) => {
    toggle();
    // handle item not existing
    if (item?.id) {
      handleEditItem(item)
      return;
    }

  };

  const editItem = (item) => {
    setActiveItem(item);
    setModal(!modal);
  };

  const renderItems = () => {
    return items.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span className="mr-2" data-cy="survivor-name">
          {item.name}
        </span>
        <span className="mr-2" data-cy="survivor-latitude">
          {item.latitude}
        </span>
        <span className="mr-2" data-cy="survivor-longitude">
          {item.longitude}
        </span>
        <span>
          <button className="btn btn-secondary mr-2" onClick={() => editItem(item)} data-cy="edit-location-button">
            Edit Location
          </button>
        </span>
      </li>
    ));
  };

  return (
    <main className="container">
      <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
      <div className="row">
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
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <ul className="list-group list-group-flush border-top-0">
              <li key={0} className="list-group-item d-flex justify-content-between align-items-center">
                <span className="mr-2">
                  Name
                </span>
                <span className="mr-2">
                  Latitude
                </span>
                <span className="mr-2">
                  Longitude
                </span>
                <span className="mr-2">
                  Edit Location
                </span>
              </li>
              {renderItems()}
            </ul>
          </div>
        </div>
      </div>
      {modal ? (
        <CustomModal itemType={'survivor'} toggle={toggle}>
          <LocationForm survivor={activeItem} onSave={handleSubmit}/>
        </CustomModal>
      ) : null}
    </main>
  );
};

export default SurvivorsList;
