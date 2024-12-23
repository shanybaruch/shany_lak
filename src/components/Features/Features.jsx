import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Icon,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CatalogIcon from "@mui/icons-material/MenuBook";
import PriceCheckIcon from "@mui/icons-material/AttachMoney";
import EventIcon from "@mui/icons-material/Event";

function Features() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("Features");
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.8) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    { title: "About me", icon: <PersonIcon sx={{ fontSize: 40, color: "#8d6e63" }} /> },
    { title: "Catalog", icon: <CatalogIcon sx={{ fontSize: 40, color: "#8d6e63" }} /> },
    { title: "Price list", icon: <PriceCheckIcon sx={{ fontSize: 40, color: "#8d6e63" }} /> },
    { title: "Making an appointment", icon: <EventIcon sx={{ fontSize: 40, color: "#8d6e63" }} /> },
  ];

  return (
    <div id="Features">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#efebe9",
          padding: 4,
        }}
      >
        <Container
          sx={{
            backgroundColor: "#d7ccc8",
            padding: "40px",
            borderRadius: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            width: "90%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            gutterBottom
            sx={{
              mb: 10,
              fontWeight: "bold",
              color: "white",
              textShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(-30px)",
              transition: "all 0.8s ease-in-out",
            }}
          >
            Visit to..
          </Typography>
          <Grid
            container
            spacing={6}
            sx={{
              justifyContent: "center",
            }}
          >
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0)"
                      : `translateY(${30 * (index + 1)}px)`,
                    transition: `all 0.8s ease-in-out ${index * 0.2}s`,
                  }}
                >
                  <Card
                    elevation={6}
                    sx={{
                      borderRadius: 3,
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                      backgroundColor: "#ffffff", // רקע לבן לכרטיסים
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 3,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <CardContent>
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{ fontWeight: "bold", mb: 3 }}
                        textAlign={"center"}
                      >
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" textAlign={"center"}>
                        Upgrade your nail care routine
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Features;
