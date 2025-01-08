import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, Container, Grid } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";

function PriceList() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="PriceList">
      <Box
        sx={{
          backgroundImage: `url('/lakbattleback.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            zIndex: 1,
          }}
        />
        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            backgroundColor: "#efebe9",
            padding: "150px",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(255, 255, 255, 0.3)",
            width: "80%",
            maxWidth: "800px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.8s ease-in-out",
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "serif",
                  padding: "20px",
                  color: "#6d4c41",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(-20px)",
                  transition: "all 0.6s ease-in-out",
                }}
              >
                SHANY BARUCH
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "sans-serif",
                  color: "#6d4c41",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(-20px)",
                  transition: "all 0.8s ease-in-out",
                }}
              >
                NAIL STUDIO
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 1,
                  paddingLeft: "80px",
                }}
              >
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
                    <PhoneIcon sx={{ color: "#6d4c41", fontSize: "20px" }} />
                  </IconButton>
                  <Typography
                    variant="body1"
                    sx={{ color: "#6d4c41", fontSize: "20px" }}
                  >
                    055-662-5797
                  </Typography>
                </Box>
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
                    <MailOutlineIcon
                      sx={{ color: "#6d4c41", fontSize: "20px" }}
                    />
                  </IconButton>
                  <Typography
                    variant="body1"
                    sx={{ color: "#6d4c41", fontSize: "20px" }}
                  >
                    baruchshany@gmail.com
                  </Typography>
                </Box>
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
                    <LocationOnIcon
                      sx={{ color: "#6d4c41", fontSize: "20px" }}
                    />
                  </IconButton>
                  <Typography
                    variant="body1"
                    sx={{ color: "#6d4c41", fontSize: "20px" }}
                  >
                    Weizman, Givatayim
                  </Typography>
                </Box>
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
                    <InstagramIcon
                      sx={{ color: "#6d4c41", fontSize: "20px" }}
                    />
                  </IconButton>
                  <Typography
                    variant="body1"
                    sx={{ color: "#6d4c41", fontSize: "20px" }}
                  >
                    shanyb.nails
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default PriceList;
``
