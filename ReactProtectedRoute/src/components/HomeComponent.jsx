import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function HomeComponent() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Welcome to the Homepage
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a simple homepage
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HomeComponent;
