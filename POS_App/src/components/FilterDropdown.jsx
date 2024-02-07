import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const FilterDropdown = ({ onChange }) => {
  const handleSelect = (eventKey) => {
    onChange(eventKey);
  };

  return (
    <>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Filter by Type
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="all">All</Dropdown.Item>
          <Dropdown.Item eventKey="fruit">Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="vegetable">Vegetable</Dropdown.Item>
          <Dropdown.Item eventKey="poultry">Poultry</Dropdown.Item>
          <Dropdown.Item eventKey="dairy">Dairy</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default FilterDropdown;
