import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import CatalogIcon from "@mui/icons-material/MenuBook";
import PriceCheckIcon from "@mui/icons-material/AttachMoney";
import EventIcon from "@mui/icons-material/Event";

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Colors",
      icon: <PersonIcon sx={{ fontSize: 40, color: "#8d6e63" }} />,
      description: "Our range of nail polish colors",
    },
    {
      title: "Catalog",
      icon: <CatalogIcon sx={{ fontSize: 40, color: "#8d6e63" }} />,
      description: "Browse our catalog of works",
    },
    {
      title: "Price list",
      icon: <PriceCheckIcon sx={{ fontSize: 40, color: "#8d6e63" }} />,
      description: "View our prices",
      onClick: () => navigate("/pricelist"),
    },
    {
      title: "Making an appointment",
      icon: <EventIcon sx={{ fontSize: 40, color: "#8d6e63" }} />,
      description: "Schedule your next appointment",
      onClick: () => navigate("/calendar"),
    },
  ];

  return (
    <div id="Services">
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
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            zIndex: 1,
          }}
        ></Box>

        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            backgroundColor: "#efebe9",
            padding: "60px",
            borderRadius: "20px",
            boxShadow: "0 4px 10px rgba(255, 255, 255, 0.3)",
            width: "100%",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.8s ease-in-out",
          }}
        >
          <Grid container spacing={6}>
            {services.map((service, index) => (
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
                    elevation={8}
                    sx={{
                      borderRadius: 3,
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                      backgroundColor: "#ffffff",
                      cursor: service.onClick ? "pointer" : "default",
                    }}
                    onClick={service.onClick || undefined}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 3,
                      }}
                    >
                      {service.icon}
                    </Box>
                    <CardContent>
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{ fontWeight: "bold", mb: 3 }}
                        textAlign={"center"}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        textAlign={"center"}
                      >
                        {service.description}
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

export default Services;
