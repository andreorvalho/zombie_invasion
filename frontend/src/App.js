import React, { useState, useEffect } from "react";
import CustomModal from "./components/CustomModal";
import SurvivorForm from "./components/SurvivorForm";
import axios from "axios";

// headers: {"X-CSRFToken": csrfToken},
// xsrfHeaderName: "X-CSRFToken",
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const API_URL = "/api/survivors/";

const App = () => {
  var [items, setItems] = useState([]);
  var [modal, setModal] = useState(false);
  var [activeItem, setActiveItem] = useState(null);

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
    axios
      .put(`${API_URL}${item.id}/`, item)
      .then((res) => refreshList())
      .catch((err) => console.log(err));
  }

  const handleCreateItem = (item) => {
    axios
      .post(API_URL, item)
      .then((res) => refreshList())
      .catch((err) => console.log(err));
  }

  const handleDelete = (item) => {
    axios
      .delete(`${API_URL}${item.id}/`)
      .then((res) => refreshList())
      .catch((err) => console.log(err));
  };

  const handleSubmit = (item) => {
    toggle();

    if (item.id) {
      handleEditItem(item)
      return;
    }

    handleCreateItem(item);
  };

  const createItem = () => {
    setActiveItem({});
    setModal(!modal);
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
        <span className="todo-title mr-2" title={item.name}>
          {item.name}
        </span>
        <span>
          <button
            className="btn btn-secondary mr-2"
            onClick={() => editItem(item)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(item)}
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };

  return (
    <main className="container">
      <h1 className="text-white text-uppercase text-center my-4">Zombie Survival Social Network</h1>
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <div className="mb-4">
              <button
                className="btn btn-primary"
                onClick={createItem}
              >
                Add task
              </button>
            </div>
            <ul className="list-group list-group-flush border-top-0">
              {renderItems()}
            </ul>
          </div>
        </div>
      </div>
      {modal ? (
        <CustomModal itemType={'survivor'} toggle={toggle}>
          <SurvivorForm survivor={activeItem} onSave={handleSubmit}/>
        </CustomModal>
      ) : null}
    </main>
  );
}

export default App;
