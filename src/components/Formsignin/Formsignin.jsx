import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  IconButton,
  Dialog,
  DialogContent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FormSignUp from "../Formsignup/Formsignup";

function FormSignIn({ onClose }) {
  const [identifier, setIdentifier] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleSendVerification = () => {
    if (!identifier) {
      alert("Please enter an email or phone number.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!emailRegex.test(identifier) && !phoneRegex.test(identifier)) {
      alert("Please enter a valid email or phone number.");
      return;
    }

    console.log(`Verification code sent to ${identifier}`);
    setIsVerificationSent(true);
    alert("Verification code sent!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!verificationCode) {
      alert("Please enter the verification code.");
      return;
    }

    console.log("Verified successfully!");
    alert("You have been signed in successfully.");
  };

  const handleSignUpOpen = () => {
    setIsSignUpOpen(true);
  };

  const handleSignUpClose = () => {
    setIsSignUpOpen(false);
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 3,
          borderRadius: 2,
          backgroundColor: "white",
          maxWidth: "360px",
          margin: "auto",
        }}
      >
        {onClose && (
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "#8d6e63",
            }}
          >
            <CloseIcon />
          </IconButton>
        )}

        <Typography
          variant="h5"
          textAlign="center"
          sx={{ mb: 3, fontWeight: "bold" }}
        >
          Sign In
        </Typography>

        <TextField
          label="Email or Phone Number"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          variant="outlined"
          fullWidth
          required
          sx={{
            "& .MuiInputBase-root": {
              borderRadius: 2,
            },
          }}
        />
        {isVerificationSent && (
          <TextField
            label="Verification Code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            variant="outlined"
            fullWidth
            required
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: 2,
              },
            }}
          />
        )}
        {!isVerificationSent ? (
          <Button
            type="button"
            onClick={handleSendVerification}
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
            Send Verification Code
          </Button>
        ) : (
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
            Verify and Sign In
          </Button>
        )}

        <Typography variant="body2" textAlign="center">
          Don’t have an account?{" "}
          <Link
            component="button"
            variant="body2"
            onClick={handleSignUpOpen}
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

      {/* Sign Up Dialog */}
      <Dialog
        open={isSignUpOpen}
        onClose={handleSignUpClose}
        maxWidth="sm"
        PaperProps={{
          sx: {
            width: "400px", // שינוי הרוחב
            borderRadius: 4,
            overflow: "visible",
            background: "rgba(255,255,255,0.9)",
          },
        }}
      >
        <DialogContent>
          <FormSignUp open={isSignUpOpen} onClose={handleSignUpClose} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default FormSignIn;
