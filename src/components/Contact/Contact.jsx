import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="Contact">
      <Box
        sx={{
          height: "50vh",
          backgroundColor: "#fdf8f4",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 4,
        }}
      >
        {/* צד שמאל - שם העסק */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            marginLeft: 8,
            gap: 1, // ריווח קטן יותר בין האלמנטים
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "serif",
              fontWeight: "bold",
              color: "#6d4c41",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(-20px)",
              transition: "all 0.6s ease-in-out",
              marginLeft: 20,
            }}
          >
            SHANY BARUCH
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "sans-serif",
              color: "#6d4c41",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(-20px)",
              transition: "all 0.8s ease-in-out",
              marginLeft: 35,
            
            }}
          >
            NAILS STUDIO
          </Typography>
        </Box>

        {/* צד ימין - פרטי יצירת קשר */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            marginRight: 50,
            gap: 2, // ריווח קטן יותר בין השורות
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-in-out",
            }}
          >
            <IconButton>
              <PhoneIcon sx={{ color: "#6d4c41" }} />
            </IconButton>
            <Typography variant="body1" sx={{ color: "#6d4c41" }}>
              055-662-5797
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-in-out 0.2s",
            }}
          >
            <IconButton>
              <MailOutlineIcon sx={{ color: "#6d4c41" }} />
            </IconButton>
            <Typography variant="body1" sx={{ color: "#6d4c41" }}>
              baruchshany@gmail.com
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-in-out 0.4s",
            }}
          >
            <IconButton>
              <LocationOnIcon sx={{ color: "#6d4c41" }} />
            </IconButton>
            <Typography variant="body1" sx={{ color: "#6d4c41" }}>
              Weizman, Givatayim
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease-in-out 0.6s",
            }}
          >
            <IconButton>
              <InstagramIcon sx={{ color: "#6d4c41" }} />
            </IconButton>
            <Typography variant="body1" sx={{ color: "#6d4c41" }}>
              shanyb.nails
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Contact;
