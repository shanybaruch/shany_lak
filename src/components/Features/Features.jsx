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

function Features() {
  return (
    <div id="Features">
      <Container sx={{ my: 16 }}>
        {" "}
        {/* מרווח עליון ותחתון */}
        <Typography
          variant="h4"
          textAlign="center"
          gutterBottom
          sx={{ mb: 10, fontWeight: "bold", color: "#B6A28E" }} // רווח בין כותרת התכונות לכרטיסים
        >
          Visit to..
        </Typography>
        <Grid container spacing={5}>
          {["About me", "My Catalog", "Scheduling appointments"].map(
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
    </div>
  );
}

export default Features;
