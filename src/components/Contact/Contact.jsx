import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact() {
  return <div id="Contact">

    <Box
      sx={{
        backgroundColor: "#fdf8f4",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
      }}
    >
      {/* כותרת */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: "serif",
          fontWeight: "bold",
          color: "#a67c52",
          textAlign: "center",
        }}
      >
        SHANY BARUCH
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontFamily: "serif",
          color: "#a67c52",
          textAlign: "center",
          marginBottom: 4,
        }}
      >
        NAILS STUDIO
      </Typography>

      {/* אייקונים ומידע ליצירת קשר */}
      <Grid container spacing={3} sx={{ maxWidth: "600px" }}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconButton>
              <PhoneIcon sx={{ color: "#a67c52" }} />
            </IconButton>
            <Typography variant="body1" sx={{ color: "#a67c52" }}>
              055-662-5797
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconButton>
              <MailOutlineIcon sx={{ color: "#a67c52" }} />
            </IconButton>
            <Typography variant="body1" sx={{ color: "#a67c52" }}>
              baruchshany@gmail.com
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconButton>
              <LocationOnIcon sx={{ color: "#a67c52" }} />
            </IconButton>
            <Typography variant="body1" sx={{ color: "#a67c52" }}>
              Weizman, Givatayim
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconButton>
              <InstagramIcon sx={{ color: "#a67c52" }} />
            </IconButton>
            <Typography variant="body1" sx={{ color: "#a67c52" }}>
              shanyb.nails
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* איור או תמונות (אופציונלי) */}
      <Box
        component="img"
        src="/butterflyback.png"
        alt="logo"
        sx={{
          width: "100%",
          maxWidth: "200px",
          marginTop: 4,
          objectFit: "contain",
        }}
      />
    </Box>


  </div>
};

export default Contact;
