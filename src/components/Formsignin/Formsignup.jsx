import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

function FormSignUp() {
  const [open, setOpen] = useState(false);
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

    // Validate confirmPassword in real-time
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
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        sx={{
          paddingX: 3, // מרווח אופקי
          paddingY: 1.5, // מרווח אנכי
          fontSize: "16px",
          borderRadius: 2,
          backgroundColor:"#8d6e63",
        }}
      >
        Sign Up
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}
          >
            Sign Up
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ p: 4 }}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3, // רווח בין האלמנטים
            }}
          >
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
                    borderRadius: 2, // עיגול פינות של השדה
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
              error={!!errors.confirmPassword} // Highlight the field in red if there's an error
              helperText={errors.confirmPassword} // Show the error message
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: 2,
                },
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "space-between", // מרחק בין הכפתורים
            padding: 3,
          }}
        >
          <Button
            onClick={() => setOpen(false)}
            color="black"
            sx={{
              paddingX: 3,
              paddingY: 1.5,
              borderRadius: 2,
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            sx={{
              paddingX: 3,
              paddingY: 1.5,
              borderRadius: 2,
              backgroundColor:"#8d6e63",
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default FormSignUp;
