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

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
          p: 6, // מרווח פנימי
          gap: 4, // רווח בין אלמנטים בתוך הקופסה
        }}
      >
        <Typography
          variant="h2"
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

      {/* Features Section */}
      <Container sx={{ my: 8 }}>
        {" "}
        {/* מרווח עליון ותחתון */}
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{ mb: 10, fontWeight: "bold", color: "#B6A28E" }} // רווח בין כותרת התכונות לכרטיסים
        >
          Features
        </Typography>
        <Grid container spacing={5}>
          {["About me", "Catalog", "Scheduling appointments"].map(
            (feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  elevation={4}
                  sx={{
                    borderRadius: 3,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)", // הגדלה עדינה בהובר
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={`https://via.placeholder.com/300?text=${feature}`}
                    alt={feature}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ fontWeight: "bold", mb: 2 }} // מרווח תחתון לטקסט
                    >
                      {feature}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Upgrade your nail care routine with {feature}. Get the
                      look you’ve always dreamed of!
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#B6A28E",
          color: "white",
          textAlign: "center",
          py: 3, // מרווח אנכי
          mt: "auto",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} All Rights Reserved to Shany Baruch
        </Typography>
      </Box>
    </>
  );
}

export default HomePage;
