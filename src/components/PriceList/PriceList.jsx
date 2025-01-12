import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

function PriceList() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="PriceList">
      <Box
        sx={{
          backgroundImage: `url('/alim.jpg')`,
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
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            zIndex: 1,
          }}
        />
        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            padding: "30px",
            borderRadius: "10px",
            maxWidth: "500px",
            textAlign: "center",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            transition: "all 1s ease-in-out",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily:"fantasy",
              color: "#6d4c41",
              marginBottom: "20px",
            }}
          >
            Price List
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "sans-serif",
              color: "#6d4c41",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            מניקור לק ג'ל מבנה אנטומי  120₪ 
          </Typography>

          <Grid container spacing={2} sx={{ marginBottom: "30px" }}>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "sans-serif",
                  color: "#6d4c41",
                  marginBottom: "10px",
                  fontSize: "18px",
                }}
              >
              20₪  מילוי וחיזוק ציפורניים חלשות עם גל בנייה 
              </Typography>
          
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "sans-serif",
                  color: "#6d4c41",
                  marginBottom: "10px",
                  fontSize: "18px",
                }}
              >
                השלמת ציפורן שבורה  10₪ 
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "sans-serif",
                  color: "#6d4c41",
                  marginBottom: "10px",
                  fontSize: "18px",
                }}
              >
                פרנץ'  10₪  
              </Typography>
            </Grid>
          </Grid>

          {/* Instructions */}
          <Box>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "sans-serif",
                color: "#6d4c41",
                fontSize: "16px",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
               אין להגיע עם מלווים ללא עדכון מראש• 
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "sans-serif",
                color: "#6d4c41",
                fontSize: "16px",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              את התור ניתן לבטל עד 24 שעות לפני המועד, אחרת יחויב במחצית מהסכום 
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "sans-serif",
                color: "#6d4c41",
                fontSize: "16px",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
               איחור של 15 דקות יגרום לביטול תור•
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "sans-serif",
                color: "#6d4c41",
                fontSize: "16px",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
               לאחר טיפול ניתנת אחריות לשבוע לתיקון. לאחר מכן, תיקון יתבצע בתשלום•
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "sans-serif",
                color: "#6d4c41",
                fontSize: "16px",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              bit / paybox / ניתן לשלם במזומן•
            </Typography>
          </Box>

          {/* Instagram */}
          <Typography
            variant="body1"
            sx={{
              fontFamily: "sans-serif",
              color: "#6d4c41",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            @shanyb.nails
          </Typography>
        </Container>
      </Box>
    </div>
  );
}

export default PriceList;
