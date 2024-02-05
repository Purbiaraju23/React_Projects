import React, { useState } from "react";
import { Typography, Paper, Container, Button } from "@mui/material";

const AccountComponent = ({ user }) => {
  const [userBalance, setUserBalance] = useState(user.balance);

  const handleWithdraw = () => {
    setUserBalance(0);
    alert("Withdrawal successful!");
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={5} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Account Information
        </Typography>
        <Typography variant="h6" gutterBottom>
          User: {user.username}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Current Balance: ${userBalance}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleWithdraw}>
          Withdraw ${userBalance}
        </Button>
      </Paper>
    </Container>
  );
};

export default AccountComponent;
