import React, { useState, useEffect, useRef } from "react";
import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";

const Catalog = () => {
  const allImages = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    url: `https://picsum.photos/300/400?random=${i}`,
  })); // רשימת כל התמונות מראש

  const [visibleImages, setVisibleImages] = useState([]); // התמונות המוצגות
  const [itemsToShow, setItemsToShow] = useState(10); // כמה תמונות להציג בהתחלה
  const observerRef = useRef(null);

  // עדכון התמונות המוצגות בהתאם למספר המבוקש
  useEffect(() => {
    setVisibleImages(allImages.slice(0, itemsToShow));
  }, [itemsToShow]);

  // תצפית לגלילה
  useEffect(() => {
    const observerCallback = (entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => setItemsToShow((prev) => prev + 10), 300); // טוען 10 תמונות חדשות
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.1, // מפעיל כאשר האלמנט 10% בתוך הצפייה
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={styles.page}>
    
      <Grid container spacing={3} sx={styles.catalog}>
        {visibleImages.map((image, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={image.id}
            sx={{
              animation: `fadeInUp 0.5s ease ${index * 0.1}s both`,
            }}
          >
            <Card sx={styles.card}>
              <CardMedia
                component="img"
                image={image.url}
                alt={`Image ${image.id}`}
                sx={styles.image}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box ref={observerRef} sx={styles.observer}></Box>
    </Box>
  );
};

const styles = {
  page: {
    backgroundColor: "#f4f4f9",
    minHeight: "100vh",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    color: "#333",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  catalog: {
    marginTop: "2px",
  },
  card: {
    borderRadius: "5px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.5s, box-shadow 0.1s",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
    },
  },
  image: {
    height: "400px",
    objectFit: "cover",
  },
  observer: {
    height: "1px",
  },
};

export default Catalog;
