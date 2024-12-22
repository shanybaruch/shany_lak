import React from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import FormSignUp from "./Formsignup";

function FormSignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  const handleSignUp = () => {
    console.log("Redirecting to Sign Up...");
    // Logic to redirect to sign-up page or open a sign-up dialog
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3, // Space between fields
        padding: 5, // Padding around the form
        borderRadius: 2, // Rounded corners
        boxShadow: 3, // Adds a shadow
        backgroundColor: "white", // White background
        width: "100%", // Responsive width
        maxWidth: "400px", // Max width for the form
        margin: "auto", // Center the form
      }}
    >
      <Typography variant="h5" textAlign="center" sx={{ mb: 3, fontWeight: "bold" }}>
        Sign In
      </Typography>

      <TextField
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        required
        sx={{
          "& .MuiInputBase-root": {
            borderRadius: 2, // Rounded input fields
          },
        }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        required
        sx={{
          "& .MuiInputBase-root": {
            borderRadius: 2, // Rounded input fields
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          paddingY: 1.5, // Vertical padding for the button
          fontSize: "16px",
          borderRadius: 2, // Rounded button
          textTransform: "none", // Disable uppercase text
          backgroundColor: "#8d6e63",
        }}
      >
        Sign In
      </Button>

      <Typography variant="body2" textAlign="center">
        Don’t have an account?{" "}
        <Link
          component="button"
          variant="body2"
          onClick={handleSignUp}
          sx={{
            color: "primary.main",
            textDecoration: "underline",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          <FormSignUp/>
          
        </Link>
      </Typography>
    </Box>
  );
}

export default FormSignIn;
