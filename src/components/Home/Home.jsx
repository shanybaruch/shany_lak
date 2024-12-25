import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

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
      <Navbar />
      <Box
        sx={{
          backgroundColor: "#d7ccc8",
          minHeight: "100vh",
          display: "flex", // שימוש ב-Flexbox
          flexDirection: "column", // אלמנטים בסידור אנכי
          justifyContent: "center", // ממרכז אנכית
          alignItems: "center", // ממרכז אופקית
          textAlign: "center",
          color: "#333",
          padding: 2,
          opacity: isVisible ? 1 : 0, // שקיפות לאנימציה
          transform: isVisible ? "translateY(0)" : "translateY(20px)", // תנועה מלמטה למעלה
          transition: "all 0.8s ease-in-out", // אנימציה חלקה
        }}
      >
        {/* תיבה פנימית עם רקע שונה */}
        <Box
          sx={{
            backgroundColor: "#f5f5f5", // צבע רקע פנימי
            paddingTop: 10,
            borderRadius: 2,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: "1300px",
            height: "auto",
            minHeight: "600px",
            marginBottom: 11,
          }}
        >
          <Box sx={{}}>
            {/* לוגו */}
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: "sans-serif",
                letterSpacing: 2,
                marginBottom: 6,
              }}
            >
              NAIL STUDIO
            </Typography>

            {/* טקסט ראשי */}
            <Box>
              {/* שורה 1 */}
              <Typography
                variant="h2" // גודל שונה עבור השורה הראשונה
                sx={{
                  letterSpacing: 5,
                  color: "#555",
                  padding:1,
                }}
              >
                THE BEST
              </Typography>

              {/* שורה 2 */}
              <Typography
                variant="h1" // גודל שונה עבור השורה השנייה
                sx={{
                  fontFamily: "",
                  fontWeight: "bold",
                  // color: "black",
                  padding:1,
                  color: "#bcaaa4", // צבע רקע פנימי
                }}
              >
                PROFESSIONAL
              </Typography>

              {/* שורה 3 */}
              <Typography
                variant="h2" // גודל שונה עבור השורה השלישית
                sx={{
                  color: "#777",
                  padding:1,
                  letterSpacing: 5,
                }}
              >
                CARE FOR
              </Typography>

              {/* שורה 4 */}
              <Typography
                variant="h2" // גודל שונה עבור השורה הרביעית
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  letterSpacing: 1,
                  backgroundColor:"#bcaaa4",
                  display: "inline-block", // שומר שהרקע מתאים לרוחב הטקסט בלבד

                }}
              >
                YOUR NAILS
              </Typography>
           
            </Box>

            {/* כפתור */}
            <Button
              variant="outlined"
              sx={{
                color: "#555",
                borderColor: "#333",
                paddingX: 3,
                paddingY: 1,
                fontWeight: "bold",
                fontSize: "13px",
                border: "2px solid grey",
                borderRadius: "2px ",
                marginBottom: 10,
                marginTop: 3,
                marginTop:9,
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                },
              }}
            >
              BOOK AN APPOINTMENT
            </Button>
          </Box>
        </Box>
        <Footer />
      </Box>
    </div>
  );
}

export default Home;
