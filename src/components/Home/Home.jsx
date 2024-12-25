import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <div id="Home">
      <Navbar
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 5, // ערך גבוה כדי להבטיח שהוא מעל הכל
      }} />
      <Box
        sx={{
          backgroundImage: `url('/lakbattleback.png')`, // נתיב לתמונה
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative", // מאפשר שכבות
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "black",
        }}
      >
        {/* שכבת רקע שקופה */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)", // צבע עם שקיפות
            zIndex: 1, // כדי להבטיח שזה מתחת לתוכן
          }}
        ></Box>

        {/* תוכן מעל השכבה השקופה */}
        <Box
          sx={{
            position: "relative", // כדי להיות מעל השכבה השקופה
            zIndex: 2, // גבוה יותר מהשכבה השקופה
            padding: 4,
          }}
        >
          {/* טקסט עליון */}
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "serif",
              letterSpacing: 2,
              marginBottom: 2,
              fontSize: "18px",
            }}
          >
            GIA & GIUSTINA JEWELRY
          </Typography>

          {/* טקסט כותרת */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Georgia, serif",
              fontWeight: "bold",
              lineHeight: 1.2,
              marginBottom: 4,
            }}
          >
            Your dream in <br />
            <Typography
              component="span"
              variant="h2"
              sx={{
                fontStyle: "italic",
                fontWeight: "normal",
              }}
            >
              nails
            </Typography>{" "}
            form
          </Typography>

          {/* כפתור */}
          <Button
            variant="outlined"
            sx={{
              color: "black",
              borderColor: "black",
              borderRadius: 0,
              paddingX: 4,
              paddingY: 1.5,
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                borderColor: "black",
              },
            }}
          >
            LEARN MORE
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
