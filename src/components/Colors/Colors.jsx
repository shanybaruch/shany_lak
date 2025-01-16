import React, { useState } from "react";
import { Box, Card, CardMedia, CardContent, Typography, Grid, Button, Stack } from "@mui/material";

// רשימת צבעים
const nailPolishes = [
  { id: 1, color: "purple", url: "https://via.placeholder.com/300/800080", name: "Purple Shine" },
  { id: 2, color: "pink", url: "https://via.placeholder.com/300/ffc0cb", name: "Pink Blossom" },
  { id: 3, color: "transparent", url: "https://via.placeholder.com/300/ffffff", name: "Clear Gloss" },
  { id: 4, color: "black", url: "https://via.placeholder.com/300/000000", name: "Classic Black" },
  { id: 5, color: "blue", url: "https://via.placeholder.com/300/0000ff", name: "Ocean Blue" },
  { id: 6, color: "red", url: "https://via.placeholder.com/300/ff0000", name: "Crimson Red" },
  { id: 7, color: "yellow", url: "https://via.placeholder.com/300/ffff00", name: "Sunshine Yellow" },
  { id: 8, color: "green", url: "https://via.placeholder.com/300/008000", name: "Emerald Green" },
];

const Colors = () => {
  const [filteredColors, setFilteredColors] = useState(nailPolishes); // רשימה מסוננת

  // פונקציית סינון
  const filterColors = (color) => {
    if (color === "all") {
      setFilteredColors(nailPolishes); // הצגת כל הצבעים
    } else {
      setFilteredColors(nailPolishes.filter((item) => item.color === color)); // סינון לפי צבע
    }
  };

  return (
    <Box sx={styles.page}>
      {/* כותרת */}
      <Typography variant="h3" align="center" sx={styles.title}>
        Nail Polish Colors
      </Typography>

      {/* כפתורי סינון */}
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ marginBottom: "20px" }}>
        <Button variant="contained" color="primary" onClick={() => filterColors("all")}>
          All
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => filterColors("purple")}>
          Purple
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => filterColors("pink")}>
          Pink
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => filterColors("transparent")}>
          Transparent
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => filterColors("black")}>
          Black
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => filterColors("blue")}>
          Blue
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => filterColors("red")}>
          Red
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => filterColors("yellow")}>
          Yellow
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => filterColors("green")}>
          Green
        </Button>
      </Stack>

      {/* קטלוג הצבעים */}
      <Grid container spacing={3}>
        {filteredColors.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card sx={styles.card}>
              <CardMedia
                component="img"
                height="200"
                image={item.url}
                alt={item.name}
                sx={styles.image}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const styles = {
  page: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    minHeight: "100vh",
  },
  title: {
    marginBottom: "20px",
    fontWeight: "bold",
    color: "#333",
  },
  card: {
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    },
  },
  image: {
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
};

export default Colors;
