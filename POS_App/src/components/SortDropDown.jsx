import React from "react";
import { Dropdown } from "react-bootstrap";

function SortDropDown({ onChange }) {
  const handleSelect = (eventKey) => {
    onChange(eventKey);
  };

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sort
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="name">Name</Dropdown.Item>
        <Dropdown.Item eventKey="price_asc">Price (Low to High)</Dropdown.Item>
        <Dropdown.Item eventKey="price_desc">Price (High to Low)</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SortDropDown;
