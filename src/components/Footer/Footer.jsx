import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#B6A28E",
          color: "white",
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
