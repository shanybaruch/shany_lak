import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";

function FormSignIn() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logged in with:", formData);
    setOpen(false); // Close dialog after successful login
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ textAlign: "center", marginTop: "50px" }}>
      {/* Sign In Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        sx={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Sign In
      </Button>

      {/* Sign In Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Sign In</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              marginTop: 2,
            }}
          >
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        </DialogActions>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Don’t have an account?{" "}
            <Button
              variant="text"
              color="primary"
              onClick={() => console.log("Redirect to Sign Up")}
            >
              Sign Up
            </Button>
          </Typography>
        </Box>
      </Dialog>
    </Box>
  );
}

export default FormSignIn;
