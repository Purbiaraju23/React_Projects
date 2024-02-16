import React from "react";
import { Toast } from "react-bootstrap";
const Toasts = ({ Title, Action }) => {
  return (
    <Toast delay={3000} autohide show>
      <Toast.Header>
        <strong className="me-auto">{Title}</strong>
        <small>just now</small>
      </Toast.Header>
      <Toast.Body>{Action} successfully</Toast.Body>
    </Toast>
  );
};
export default Toasts;
