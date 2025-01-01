import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function FormSignUp() {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
  });
  const [errors, setErrors] = useState({
    emailOrPhone: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // בדיקת אימייל
    const phoneRegex = /^\d{10}$/; // בדיקת מספר טלפון (10 ספרות)
    if (!emailRegex.test(value) && !phoneRegex.test(value)) {
      setErrors({
        ...errors,
        emailOrPhone: "Please enter a valid email or phone number",
      });
    } else {
      setErrors({ ...errors, emailOrPhone: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.emailOrPhone || !formData.emailOrPhone) {
      alert("Please enter a valid email or phone number.");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  const handleBack = () => {
    navigate(-1); // חזרה לעמוד הקודם
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          padding: 5,
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "white",
          width: "90%",
          maxWidth: "400px",
        }}
      >
        {/* כפתור חזרה */}
        <Button
          onClick={handleBack}
          startIcon={<ArrowBackIcon />}
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            color: "#8d6e63",
          }}
        >
          Back
        </Button>

        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Sign Up
        </Typography>

        {/* Email or Phone Field */}
        <TextField
          label="Email or Phone Number"
          name="emailOrPhone"
          type="text"
          value={formData.emailOrPhone}
          onChange={handleChange}
          fullWidth
          required
          error={!!errors.emailOrPhone}
          helperText={errors.emailOrPhone}
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: 2,
            },
          }}
        />

        {/* כפתורים */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            width: "100%",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => console.log("Cancelled")}
            fullWidth
            sx={{
              paddingY: 1.5,
              fontSize: "16px",
              borderRadius: 2,
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              paddingY: 1.5,
              fontSize: "16px",
              borderRadius: 2,
              backgroundColor: "#8d6e63",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default FormSignUp;
