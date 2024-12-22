import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

function Features() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // הפעלת האנימציה לאחר טעינת הרכיב
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="Features">
      <Box
        sx={{
          minHeight: "100vh", // גובה מינימלי של המסך כולו
          display: "flex", // שימוש ב-Flexbox
          flexDirection: "column", // אלמנטים בסידור אנכי
          alignItems: "center", // מרכוז אופקי
          justifyContent: "center", // מרכוז אנכי
          backgroundColor: "#fdf8f4", // צבע רקע עדין
          padding: 4,
        }}
      >
        <Container>
          <Typography
            variant="h4"
            textAlign="center"
            gutterBottom
            sx={{
              mb: 10,
              fontWeight: "bold",
              color: "#B6A28E",
              opacity: isVisible ? 1 : 0, // שקיפות לאנימציה
              transform: isVisible ? "translateY(0)" : "translateY(-30px)", // תנועה מלמעלה למטה
              transition: "all 0.8s ease-in-out", // אנימציה חלקה
            }}
          >
            Visit to..
          </Typography>
          <Grid container spacing={5}>
            {["About me", "Catalog", "Scheduling appointments"].map(
              (feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box
                    sx={{
                      opacity: isVisible ? 1 : 0, // שקיפות
                      transform: isVisible
                        ? "translateY(0)"
                        : `translateY(${30 * (index + 1)}px)`, // תנועה מלמטה
                      transition: `all 0.8s ease-in-out ${index * 0.2}s`, // עיכוב לכל כרטיס
                    }}
                  >
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
                          sx={{ fontWeight: "bold", mb: 2 }}
                        >
                          {feature}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Upgrade your nail care routine 
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>
              )
            )}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Features;
