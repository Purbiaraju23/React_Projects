import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

const UserContact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/contacts");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <h2 style={{ color: "white" }}>Error: {error}</h2>;
  }

  return (
    <div>
      <h1 className="contact-heading">Contacts ( Using Fetch API )</h1>
      {contacts.map((contact) => (
        <Card
          className="contact-card"
          sx={{ marginBottom: "5px" }}
          key={contact.id}
        >
          <CardContent className="card-content">
            <div>
              <img
                src="./src/assets/userlogo.png"
                alt="User logo"
                className="user-logo"
              />
              <Typography variant="h6">
                {contact.firstName} {contact.lastName}
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
      ))}
    </div>
  );
};

export default UserContact;
