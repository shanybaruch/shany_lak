import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#fdf8f4",
          color: "black",
          textAlign: "center",
          py: 1, // מרווח אנכי
          mt: "auto",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} All Rights Reserved to Shany Baruch
        </Typography>
      </Box>
    </div>
  );
}

export default Footer;
