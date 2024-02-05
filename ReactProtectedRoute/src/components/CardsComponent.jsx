import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

function CardsComponent({ user }) {
  return (
    <Card variant="outlined" style={{ minWidth: 275, marginBottom: "20px" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          User Details
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {user.username}
        </Typography>
        <Typography variant="body2" component="div">
          Email: {user.email}
        </Typography>
        <Typography variant="body2" component="div">
          Address: {user.address}
        </Typography>
        <Typography variant="body2" component="div">
          Phone: {user.phone}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardsComponent;
