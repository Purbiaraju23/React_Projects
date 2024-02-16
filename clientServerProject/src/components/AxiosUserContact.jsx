import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import "../index.css";

function AxiosUserContact() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");

  const getApiData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/contacts");
      setData(response.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  if (isError) {
    return <h2 style={{ color: "white" }}>Error: {isError}</h2>;
  }

  return (
    <>
      <h1 className="contact-heading">Contacts ( Using Axios )</h1>
      {data.map((item) => {
        const { id, firstName, lastName } = item;

        return (
          <>
            <Card className="axios-card" sx={{ marginBottom: "5px" }} key={id}>
              <CardContent className="axios-card-content">
                <div>
                  <img
                    src="./src/assets/userlogo.png"
                    alt="User logo"
                    className="user-logo"
                  />
                  <Typography variant="h6">
                    {firstName} {lastName}
                  </Typography>
                </div>
                <IconButton
                  aria-label="Call"
                  color="primary"
                  style={{ marginRight: "30px" }}
                >
                  <CallIcon />
                </IconButton>
              </CardContent>
            </Card>
          </>
        );
      })}
    </>
  );
}

export default AxiosUserContact;
