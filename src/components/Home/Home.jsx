import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";


function Home() {
  return (
    <div id="Home">
      <Box
        sx={{
          backgroundColor: "white",
          // backgroundImage: `url('/backpage.png')`, // נתיב יחסי מתוך public
          backgroundSize: 'fit', // משנה את הגודל כך שכל התמונה תיכנס
          backgroundRepeat: 'no-repeat', // מונע חזרה על הרקע
          backgroundPosition: 'center', // ממרכז את התמונה
          height: "90vh", // מקטין את הגובה של הרקע
          width: "auto", // מקטין את הרוחב של הרקע
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          p: 8, // מרווח פנימי
          gap: 5, // רווח בין אלמנטים בתוך הקופסה
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 2 }} // מרווח תחתון לכותרת
        >
          Everything You Need for Your Nails
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: "600px", mb: 4 }} // רווח תחתון לטקסט
        >
          Discover the perfect products and tools to transform your nails into a
          masterpiece!
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            paddingX: 4, // רווח בצדדים
            paddingY: 1.5, // רווח אנכי
            borderRadius: "8px", // עיגול פינות
            fontSize: "16px",
            backgroundColor: "#B6A28E", // צבע רקע מותאם אישית
            color: "#000", // צבע טקסט
            "&:hover": {
              backgroundColor: "#D6C0B3", // צבע רקע בהובר
            },
          }}
        >
          Get Started
        </Button>
      </Box>
    </div>
  );
}

export default Home;
