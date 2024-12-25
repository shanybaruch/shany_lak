import React from "react";
import { Box, Typography, Button } from "@mui/material";

function About() {
  return (
    <div id="About">
      <Box
        sx={{
          backgroundImage: `url('/shaishback.png')`, // נתיב לתמונה
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
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
            jewelry
          </Typography>{" "}
          form
        </Typography>

        {/* כפתור */}
        <Button
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            borderRadius: 0,
            paddingX: 4,
            paddingY: 1.5,
            fontSize: "16px",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderColor: "white",
            },
          }}
        >
          LEARN MORE
        </Button>
      </Box>
    </div>
  );
}

export default About;
