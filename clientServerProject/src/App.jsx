import React from "react";
import UserContact from "./components/UserContact";
import AxiosUserContact from "./components/AxiosUserContact";
import { useState } from "react";
import { Button } from "@mui/material";

const App = () => {
  const [select, setSelected] = useState();

  const handleFetch = () => {
    setSelected(true);
  };

  const handleAxios = () => {
    setSelected(false);
  };

  return (
    <>
      <div className="toggle-btn">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button onClick={handleFetch} variant="contained" color="success">
            Fetch
          </Button>
          <Button onClick={handleAxios} variant="contained" color="success">
            Axios
          </Button>
        </div>
      </div>
      {select ? <UserContact /> : <AxiosUserContact />}
    </>
  );
};

export default App;
