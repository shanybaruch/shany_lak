import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // הפעלת האנימציה לאחר טעינת הקומפוננטה
    }, 100);

    return () => clearTimeout(timer); // ניקוי הטיימר
  }, []);

  return (
    <div id="Home">
      <Box
        sx={{
          backgroundColor: "#d7ccc8", // צבע רקע ראשי
          minHeight: "80vh", // גובה של המסך כולו
          display: "flex", // שימוש ב-Flexbox
          flexDirection: "column", // אלמנטים בסידור אנכי
          justifyContent: "center", // ממרכז אנכית
          alignItems: "center", // ממרכז אופקית
          textAlign: "center", // טקסט במרכז
          color: "#333", // צבע טקסט כהה
          padding: 4, // ריווח פנימי
        }}
      >
        {/* תיבה פנימית עם רקע שונה */}
        <Box
          sx={{
            backgroundColor: "#f5f5f5", // צבע רקע פנימי
            padding: 8, // ריווח פנימי
            borderRadius: 4, // פינות מעוגלות
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // צל קל
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            opacity: isVisible ? 1 : 0, // שקיפות לאנימציה
            transform: isVisible ? "translateY(0)" : "translateY(20px)", // תנועה מלמטה למעלה
            transition: "all 0.8s ease-in-out", // אנימציה חלקה
          }}
        >
          {/* לוגו */}
          <Typography
            variant="h6"
            sx={{
              fontFamily: "serif",
              fontWeight: "bold",
              letterSpacing: 1,
              marginBottom: 2,
            }}
          >
            NAIL STUDIO
          </Typography>

          {/* טקסט ראשי */}
          <Typography
            variant="h3"
            sx={{
              fontFamily: "serif",
              fontWeight: "bold",
              lineHeight: 1.5,
              maxWidth: "800px",
              marginBottom: 4,
            }}
          >
            Shany <br />
            Baruch
          </Typography>

          {/* כפתור */}
          <Button
            variant="outlined"
            sx={{
              color: "#333",
              borderColor: "#333",
              paddingX: 4,
              paddingY: 1.5,
              borderRadius: "50px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.05)", // רקע עדין בהובר
              },
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
