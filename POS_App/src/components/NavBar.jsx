import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FilterOptions, SortOptions } from "../Utils/ProjectData";
import { useState } from "react";
import "../index.css";
import { OverlayTrigger, Badge, NavDropdown } from "react-bootstrap";
import useType from "../contexts/TypeContext";

function NavBar({
  setproductType,
  onSortSelect,
  cartHover,
  items,
  sortDirection,
}) {
  const { productType } = useType();
  const [selectedType, setSelectedType] = useState("all");
  const handleSelect = (eventKey) => {
    onSortSelect(eventKey);
    setSelectedType(eventKey);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="navbar-data">
        <div className="container-fluid ">
          <a href="#home" className="navbar-brand margin text-white">
            Grocery Basket
          </a>
        </div>
        <div className="d-flex flex-row">
          {FilterOptions.map((options, index) => {
            return (
              <button
                key={index}
                type="submit"
                onClick={() => {
                  setSelectedType(options.key);
                  setproductType(options.key);
                }}
                className={productType === options.key ? "active" : "deactive"}
              >
                {options.label}
              </button>
            );
          })}
        </div>
        <NavDropdown
          title="Sort"
          id="nav-dropdown"
          onSelect={handleSelect}
          className="deactive"
        >
          {SortOptions.map((item) =>
            item.key === "clear" ? (
              <React.Fragment key={item.key}>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey={item.key}>
                  {item.label}
                </NavDropdown.Item>
              </React.Fragment>
            ) : (
              <NavDropdown.Item key={item.key} eventKey={item.key}>
                By {item.label}{" "}
                {selectedType === item.key &&
                  (sortDirection[item.key] === "asc" ? "↑" : "↓")}
              </NavDropdown.Item>
            )
          )}
        </NavDropdown>

        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={cartHover}
          rootClose
        >
          <div className="shop-cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="40"
              fill="white"
              className="bi bi-cart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
            <div>
              <Badge
                bg="danger"
                className="notify position-absolute top-0 cart-length"
                pill
              >
                {items.length}
              </Badge>
            </div>
          </div>
        </OverlayTrigger>
      </div>
    </nav>
  );
}

export default NavBar;
