import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Dialog,
  DialogContent,
} from "@mui/material";
import FormSignIn from "../Formsignin/Formsignin";

function Navbar() {
  const [activeButton, setActiveButton] = useState("home"); // שמור את הכפתור הפעיל
  const [open, setOpen] = useState(false); // מצב של פתיחת וסגירת החלון

  // פונקציות לפתיחה וסגירה של ה-Dialog
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName); // עדכן את הכפתור שנלחץ
  };

  return (
    <AppBar  position="static" elevation={0}  sx={{ backgroundColor: "#d7ccc8", color: "#a1887f" }}>
  <Toolbar>
    {/* לוגו בצד שמאל
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        
        cursor: "pointer",
      }}
    >
      <Box
        component="img"
        src="/butterflyback.png" // הנתיב לתמונה (ודאי שהלוגו נמצא ב-public)
        alt="Logo"
        sx={{
          width: 95, // גודל התמונה
          height: 95,
          marginRight: 1, // רווח בין התמונה לטקסט
        }}
      />
      <Typography
        variant="h6"
        component="div"
        sx={{
          fontSize: "18px",
          color: "#a1887f",
        }}
      >
        {/* Logo */}
      {/* </Typography>
    </Box> */}


        {/* כפתורי ניווט בצד ימין */}
        <Box
          sx={{
            justifyContent: "center", // ממרכז את הכפתורים אופקית
            alignItems: "center", // ממרכז את הכפתורים אנכית
            display: "flex",
            gap: 7,
            py: 2, // מרווח אנכי
            mt: "auto",
            flexGrow: 1, // מרחיב את התיבה כדי למרכז הכל
            color: "black",
            
          }}
        >
          <Button
            color="inherit"
            href="#Home"
            onClick={() => handleButtonClick("home")}
            sx={{
              paddingX: 3,
              paddingY: 2,
              height: "60px",
              fontSize: "14px",
              color: activeButton === "home" ? "#a1887f" : "inherit", // צבע משתנה אם לחוץ
              fontWeight: activeButton === "home" ? "bold" : "normal", // הדגשה אם לחוץ
              borderBottom: activeButton === "home" ? "0px solid #a1887f" : "none", // קו תחתון אם לחוץ
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            href="#About"
            onClick={() => handleButtonClick("about")}
            sx={{
              paddingX: 3,
              paddingY: 2,
              height: "60px",
              fontSize: "14px",

              color: activeButton === "about" ? "#a1887f" : "inherit",
              fontWeight: activeButton === "about" ? "bold" : "normal",
              borderBottom: activeButton === "about" ? "0px solid #a1887f" : "none",
            }}
          >
            About
          </Button>
         
          <Button

            color="inherit"
            href="#Features"
            onClick={() => handleButtonClick("features")}
            sx={{
              paddingX: 3,
              paddingY: 2,
              height: "60px",
              fontSize: "14px",
          
              color: activeButton === "features" ? "#a1887f" : "inherit",
              fontWeight: activeButton === "features" ? "bold" : "normal",
              borderBottom: activeButton === "features" ? "0px solid #a1887f" : "none",
            }}
          >
            Features
          </Button>

          <Button
            color="inherit"
            href="#Contact"
            onClick={() => handleButtonClick("contact")}
            sx={{
              paddingX: 3,
              paddingY: 2,
              height: "60px",
              fontSize: "14px",
         
              color: activeButton === "contact" ? "#a1887f" : "inherit",
              fontWeight: activeButton === "contact" ? "bold" : "normal",
              borderBottom: activeButton === "contact" ? "0px solid #a1887f" : "none",
            }}
          >
            Contact
          </Button>

          {/* כפתור לפתיחת הדיאלוג */}
          <Button
            color="inherit"
            onClick={handleOpen}
            sx={{
              paddingX: 3,
              paddingY: 2,
              height: "60px",
              fontSize: "14px",
         
              color: activeButton === "signin" ? "#a1887f" : "inherit",
              fontWeight: activeButton === "signin" ? "bold" : "normal",
              borderBottom: activeButton === "signin" ? "0px solidrgb(239, 223, 217)" : "none",
            }}
          >
            Sign In
          </Button>
        </Box>
      </Toolbar>

      {/* דיאלוג להצגת טופס ההתחברות */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogContent>
          <FormSignIn /> {/* כאן מוצגת הקומפוננטה של טופס ההתחברות */}
        </DialogContent>
      </Dialog>
    </AppBar>
  );
}

export default Navbar;
