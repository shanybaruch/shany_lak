import React from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

function FormSignIn({ onClose }) { // הוספת פרופס כדי לסגור את הדיאלוג מבחוץ
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  const handleSignUp = () => {
    if (onClose) {
      onClose(); // סגירת חלון ההתחברות
    }
    navigate("/signup"); // ניווט לדף ההרשמה
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        padding: 5,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "white",
        width: "100%",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <Typography
        variant="h5"
        textAlign="center"
        sx={{ mb: 3, fontWeight: "bold" }}
      >
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
            borderRadius: 2,
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
            borderRadius: 2,
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          paddingY: 1.5,
          fontSize: "16px",
          borderRadius: 2,
          textTransform: "none",
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
          onClick={handleSignUp} // קריאה לפונקציה שמסוגרת את הדיאלוג
          sx={{
            color: "primary.main",
            textDecoration: "underline",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Sign Up
        </Link>
      </Typography>
    </Box>
  );
}

export default FormSignIn;
