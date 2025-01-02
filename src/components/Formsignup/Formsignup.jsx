import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function FormSignUp({ open, onClose }) {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    verificationMethod: "email", // email or phone
    verificationCode: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({
        ...errors,
        email: emailRegex.test(value) ? "" : "Please enter a valid email",
      });
    }

    if (name === "phone") {
      const phoneRegex = /^\d{10}$/;
      setErrors({
        ...errors,
        phone: phoneRegex.test(value) ? "" : "Please enter a valid 10-digit phone number",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errors.email || errors.phone || !formData.email || !formData.phone) {
      alert("Please fill in valid email and phone number.");
      return;
    }

    console.log(`Code sent to ${formData.verificationMethod}:`, formData[formData.verificationMethod]);
    alert(`Verification code sent to your ${formData.verificationMethod}.`);
    setIsCodeSent(true);
  };

  const handleVerify = (e) => {
    e.preventDefault();

    if (!formData.verificationCode) {
      alert("Please enter the verification code.");
      return;
    }

    console.log("Verification successful with code:", formData.verificationCode);
    alert("Verification successful!");
    onClose(); // Close the dialog after successful verification
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      BackdropProps={{
        sx: { backgroundColor: "rgba(255, 255, 255, 0.5)" }, // רקע בהיר
      }}
      PaperProps={{
        sx: { borderRadius: 2 },
      }}
    >
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold", fontSize: "25px" }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            left: 10,
            top: 10,
            color: "#8d6e63",
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        Sign Up
      </DialogTitle>
      <DialogContent>
        <Box
          component="form"
          onSubmit={isCodeSent ? handleVerify : handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "center", // למרכז את האלמנטים
            padding: 0,
          }}
        >
          {!isCodeSent ? (
            <>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                error={!!errors.email}
                helperText={errors.email}
                sx={{
                  maxWidth: "360px", // הגבלת רוחב
                }}
              />

              <TextField
                label="Phone Number"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                required
                error={!!errors.phone}
                helperText={errors.phone}
                sx={{
                  maxWidth: "360px", // הגבלת רוחב
                }}
              />

              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Choose Verification Method:
              </Typography>
              <RadioGroup
                row
                name="verificationMethod"
                value={formData.verificationMethod}
                onChange={(e) =>
                  setFormData({ ...formData, verificationMethod: e.target.value })
                }
                sx={{
                  justifyContent: "center", // מרכוז הבחירה
                }}
              >
                <FormControlLabel
                  value="email"
                  control={<Radio />}
                  label="Email"
                />
                <FormControlLabel
                  value="phone"
                  control={<Radio />}
                  label="Phone"
                />
              </RadioGroup>
            </>
          ) : (
            <TextField
              label="Verification Code"
              name="verificationCode"
              type="text"
              value={formData.verificationCode}
              onChange={(e) =>
                setFormData({ ...formData, verificationCode: e.target.value })
              }
              fullWidth
              required
              error={!formData.verificationCode}
              helperText={
                !formData.verificationCode
                  ? "Please enter the verification code"
                  : ""
              }
              sx={{
                maxWidth: "300px", // הגבלת רוחב
              }}
            />
          )}
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          marginTop: "-10px",
          justifyContent: "center",
        }}
      >
        <Button
          type="submit"
          onClick={isCodeSent ? handleVerify : handleSubmit}
          variant="contained"
          sx={{ backgroundColor: "#8d6e63", color: "white", padding: "10px", width: "100px" }}
        >
          {isCodeSent ? "Verify" : "Submit"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormSignUp;
