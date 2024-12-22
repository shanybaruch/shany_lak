import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="Contact">
      <Box
        sx={{
          backgroundColor: "#fdf8f4",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 4,
        }}
      >
        {/* כותרת */}
        <Typography
          variant="h3"
          sx={{
            fontFamily: "serif",
            fontWeight: "bold",
            color: "#a1887f",
            textAlign: "center",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(-20px)",
            transition: "all 0.6s ease-in-out",
          }}
        >
          SHANY BARUCH
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "sans-serif",
            color: "#a1887f",
            textAlign: "center",
            marginBottom: 4,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(-20px)",
            transition: "all 0.8s ease-in-out",
          }}
        >
          NAILS STUDIO
        </Typography>

        {/* אייקונים ומידע ליצירת קשר */}
        <Grid container spacing={3} sx={{ maxWidth: "600px" }}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-in-out",
              }}
            >
              <IconButton>
                <PhoneIcon sx={{ color: "#8d6e63" }} />
              </IconButton>
              <Typography variant="body1" sx={{ color: "#8d6e63" }}>
                055-662-5797
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-in-out 0.2s",
              }}
            >
              <IconButton>
                <MailOutlineIcon sx={{ color: "#8d6e63" }} />
              </IconButton>
              <Typography variant="body1" sx={{ color: "#8d6e63" }}>
                baruchshany@gmail.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-in-out 0.4s",
              }}
            >
              <IconButton>
                <LocationOnIcon sx={{ color: "#8d6e63" }} />
              </IconButton>
              <Typography variant="body1" sx={{ color: "#8d6e63" }}>
                Weizman, Givatayim
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-in-out 0.6s",
              }}
            >
              <IconButton>
                <InstagramIcon sx={{ color: "#8d6e63" }} />
              </IconButton>
              <Typography variant="body1" sx={{ color: "#8d6e63" }}>
                shanyb.nails
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* תמונה */}
        <Box
          component="img"
          src="/butterflyback.png"
          alt="logo"
          sx={{
            width: "100%",
            maxWidth: "200px",
            marginTop: 4,
            objectFit: "contain",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.8)",
            transition: "all 0.9s ease-in-out",
          }}
        />
      </Box>
    </div>
  );
}

export default Contact;
