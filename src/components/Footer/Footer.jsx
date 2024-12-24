import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "transparent", // שקיפות מלאה כדי לראות את הרקע מאחור
          color: "black",
          textAlign: "center",
          py: 1, // מרווח אנכי
          position: "fixed", // מיקום קבוע בתחתית המסך
          bottom: 0, // מיקום בתחתית הדף
          left: 0,
          width: "100%", // רוחב מלא
          zIndex: 10, // כדי להיות מעל רכיבים אחרים
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
