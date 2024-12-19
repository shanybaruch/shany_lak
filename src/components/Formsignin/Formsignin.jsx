import React from "react";
import { Box, TextField, Button } from "@mui/material";

function FormSignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField label="Email" type="email" fullWidth required />
      <TextField label="Password" type="password" fullWidth required />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Sign In
      </Button>
    </Box>
  );
}

export default FormSignIn;
