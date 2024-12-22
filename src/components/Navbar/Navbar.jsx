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
    <AppBar position="fixed" sx={{ backgroundColor: "#d7ccc8", color: "#a1887f" }}>
      <Toolbar>
        {/* לוגו בצד שמאל */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: "pointer" }}
        >
          {" "}
          Logo
        </Typography>

        {/* כפתורי ניווט בצד ימין */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            py: 2, // מרווח אנכי
            mt: "auto",
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
              borderBottom: activeButton === "home" ? "2px solid #a1887f" : "none", // קו תחתון אם לחוץ
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
              borderBottom: activeButton === "about" ? "2px solid #a1887f" : "none",
            }}
          >
            About
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
              borderBottom: activeButton === "contact" ? "2px solid #a1887f" : "none",
            }}
          >
            Contact
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
              borderBottom: activeButton === "features" ? "2px solid #a1887f" : "none",
            }}
          >
            Features
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
              borderBottom: activeButton === "signin" ? "2px solid #a1887f" : "none",
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
