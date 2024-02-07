import React from "react";
import { Dropdown } from "react-bootstrap";

function OptionDropdown({ onChange, isSorting }) {
  const handleSelect = (eventKey) => {
    onChange(eventKey);
  };

  const options = isSorting
    ? [
        { key: "name", label: "Name" },
        { key: "price_asc", label: "Price (Low to High)" },
        { key: "price_desc", label: "Price (High to Low)" },
      ]
    : [
        { key: "all", label: "All" },
        { key: "fruit", label: "Fruit" },
        { key: "vegetable", label: "Vegetable" },
        { key: "poultry", label: "Poultry" },
        { key: "dairy", label: "Dairy" },
      ];

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {isSorting ? "Sort" : "Filter"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {isSorting ? (
          <>
            {options.map((item) => (
              <Dropdown.Item key={item.key} eventKey={item.key}>
                {item.label}
              </Dropdown.Item>
            ))}
          </>
        ) : (
          <>
            {options.map((item) => (
              <>
                {item.key === "all" && (
                  <>
                    <Dropdown.Item key={item.key} eventKey={item.key}>
                      {item.label}
                    </Dropdown.Item>
                    <Dropdown.Divider key={`divider-${item.key}`} />
                  </>
                )}
                {item.key !== "all" && (
                  <>
                    <Dropdown.Item key={item.key} eventKey={item.key}>
                      {item.label}
                    </Dropdown.Item>
                  </>
                )}
              </>
            ))}
          </>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default OptionDropdown;
