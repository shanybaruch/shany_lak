import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";

function FormSignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "confirmPassword") {
      if (value !== formData.password) {
        setErrors({ ...errors, confirmPassword: "Passwords do not match" });
      } else {
        setErrors({ ...errors, confirmPassword: "" });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrors({ ...errors, confirmPassword: "Passwords do not match" });
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh", // גובה מלא של העמוד
        display: "flex",
        justifyContent: "center", // ממרכז אופקית
        alignItems: "center", // ממרכז אנכית
        backgroundColor: "#f5f5f5", // צבע רקע
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4, // רווח בין האלמנטים
          padding: 5,
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // צל קל
          backgroundColor: "white",
          width: "90%", // שימוש ברוחב יחסי
          maxWidth: "400px", // רוחב מקסימלי
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Sign Up
        </Typography>

        {/* שדות הטופס */}
        {["email", "password"].map((field) => (
          <TextField
            key={field}
            label={field.replace(/^\w/, (c) => c.toUpperCase())}
            name={field}
            type={field === "password" ? "password" : "text"}
            value={formData[field]}
            onChange={handleChange}
            fullWidth
            required
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: 2, // עיגול פינות
              },
            }}
          />
        ))}

        {/* Confirm Password Field */}
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          fullWidth
          required
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
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
            justifyContent: "space-between", // ריווח בין הכפתורים
            gap: 2, // ריווח אופקי בין הכפתורים
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
