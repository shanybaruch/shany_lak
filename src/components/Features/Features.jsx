import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CatalogIcon from "@mui/icons-material/MenuBook";
import PriceCheckIcon from "@mui/icons-material/AttachMoney";
import EventIcon from "@mui/icons-material/Event";

function Features() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // הפעלת האנימציה מיד עם טעינת הקומפוננטה
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const features = [
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
    },
    {
      title: "Making an appointment",
      icon: <EventIcon sx={{ fontSize: 40, color: "#8d6e63" }} />,
      description: "Schedule your next appointment here",
    },
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
          padding: 2,
        }}
      >
        <Container
          sx={{
            backgroundColor: "#d7ccc8",
            padding: "60px",
            borderRadius: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            width: "100%",
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
              textShadow: "2px 3px 3px rgba(0, 0, 0, 0.4)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(-30px)",
              transition: "all 0.8s ease-in-out",
            }}
          >
            Visit to..
          </Typography>
          <Grid container spacing={6}>
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
                      backgroundColor: "#ffffff",
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
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        textAlign={"center"}
                      >
                        {feature.description}
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
