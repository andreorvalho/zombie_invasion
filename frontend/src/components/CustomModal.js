import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const CustomModal = ({ itemType, toggle, children }) => {
  return (
    <Modal isOpen={true} toggle={toggle}>
      <ModalHeader toggle={toggle}>{itemType}</ModalHeader>
      <ModalBody>
        {children}
      </ModalBody>
    </Modal>
  );
}

export default CustomModal;
