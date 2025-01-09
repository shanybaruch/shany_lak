import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";

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
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            zIndex: 1,
          }}
        />
        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            maxWidth: "500px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "serif",
              color: "#6d4c41",
              marginBottom: "10px",
            }}
          >
            PRICE
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "sans-serif",
              fontSize: "18px",
              color: "#6d4c41",
              marginBottom: "30px",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            List
          </Typography>

          {/* Nail Services */}
          <Box
            sx={{
              marginBottom: "20px",
              borderBottom: "1px solid #6d4c41",
              paddingBottom: "10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "sans-serif",
                fontWeight: "bold",
                color: "#6d4c41",
                marginBottom: "10px",
                textTransform: "uppercase",
              }}
            >
              Nail Services
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sx={{ textAlign: "left" }}>
                <Typography variant="body1">Basic Manicure</Typography>
                <Typography variant="body1">Gel Polish Manicure</Typography>
                <Typography variant="body1">Basic Pedicure</Typography>
                <Typography variant="body1">Pedicure + Gel Manicure</Typography>
                <Typography variant="body1">Nail Repair</Typography>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "right" }}>
                <Typography variant="body1">$20</Typography>
                <Typography variant="body1">$25</Typography>
                <Typography variant="body1">$15</Typography>
                <Typography variant="body1">$30</Typography>
                <Typography variant="body1">$10</Typography>
              </Grid>
            </Grid>
          </Box>

          {/* Eyelash Extensions */}
          <Box
            sx={{
              marginBottom: "20px",
              borderBottom: "1px solid #6d4c41",
              paddingBottom: "10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "sans-serif",
                fontWeight: "bold",
                color: "#6d4c41",
                marginBottom: "10px",
                textTransform: "uppercase",
              }}
            >
              Eyelash Extensions
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sx={{ textAlign: "left" }}>
                <Typography variant="body1">Temporary Extensions</Typography>
                <Typography variant="body1">Eyelash Refill</Typography>
                <Typography variant="body1">Eyelash Lift</Typography>
                <Typography variant="body1">Eyelash Treatment</Typography>
                <Typography variant="body1">Volume</Typography>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "right" }}>
                <Typography variant="body1">$30</Typography>
                <Typography variant="body1">$25</Typography>
                <Typography variant="body1">$15</Typography>
                <Typography variant="body1">$30</Typography>
                <Typography variant="body1">$25</Typography>
              </Grid>
            </Grid>
          </Box>

          {/* Book Now Button */}
          <Button
            variant="contained"
            sx={{
              marginTop: "20px",
              backgroundColor: "#6d4c41",
              color: "#fff",
              fontWeight: "bold",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "#5a392f",
              },
            }}
          >
            Book Now
          </Button>
        </Container>
      </Box>
    </div>
  );
}

export default PriceList;
