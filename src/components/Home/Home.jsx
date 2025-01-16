import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Navbar from "../Navbar/Navbar";

function Home() {
  const handleOpenNewTab = (url) => {
    window.open(window.location.origin + url, "_blank"); // פותח את הקישור בחלון חדש עם כתובת בסיס מלאה
  };

  return (
    <div id="Home">
      <Navbar />
      <Box
        sx={{
          backgroundImage: `url('/lakbattleback.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "black",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        ></Box>

        <Box
          sx={{
            position: "relative",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "serif",
              letterSpacing: 4,
              marginBottom: 7,
              fontSize: "18px",
            }}
          >
            SHANY BARUCH NAIL STUDIO
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontFamily: "Segoe UI",
              lineHeight: 1.5,
              fontWeight: "bold",
              marginBottom: 6,
            }}
          >
            THE BEST{" "}
            <Typography
              component="span"
              variant="h3"
              sx={{
                fontFamily: "Segoe UI",
              }}
            >
              FOR YOUR <br />
            </Typography>
            <Typography
              component="span"
              variant="h2"
              sx={{
                fontFamily: "unset", // שינוי הפונט עבור המילה NAILS
                fontStyle: "italic",
                letterSpacing: 8,
              }}
            >
              NAILS
            </Typography>
          </Typography>

          <Button
            variant="outlined"
            onClick={() => handleOpenNewTab("/calendar")} // פותח את Calendar בחלון חדש
            sx={{
              color: "black",
              borderColor: "black",
              borderRadius: 0,
              letterSpacing: 1,
              paddingX: 3,
              paddingY: 1,
              marginBottom: -3,
              fontSize: "14px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.6)",
              },
            }}
          >
            BOOK AN APPOINTMENT
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
