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
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Welcome to MyWebsite
        </Typography>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Discover amazing features and learn more about us!
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Box>

      {/* Features Section */}
      <Container sx={{ marginY: 5 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          {[1, 2, 3].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://via.placeholder.com/300?text=Feature+${index + 1}`}
                  alt={`Feature ${index + 1}`}
                />
                <CardContent>
                  <Typography variant="h5">Feature {index + 1}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque venenatis.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#1976d2",
          color: "white",
          textAlign: "center",
          padding: "10px",
          marginTop: "auto",
        }}
      >
        <Typography variant="body1">© 2023 MyWebsite. All Rights Reserved.</Typography>
      </Box>
    </>
  );
}

export default HomePage;
