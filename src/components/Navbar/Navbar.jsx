import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Dialog,
  DialogContent,
} from "@mui/material";
import { Link } from "react-router-dom";
import FormSignIn from "../Formsignin/Formsignin";

function Navbar() {
  const [activeButton, setActiveButton] = useState("home");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.8)", // שקוף עם רקע לבן
        color: "black",
        zIndex: 10, // גבוה יותר משאר האלמנטים
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            gap: 7,
            py: 2,
            flexGrow: 1,
            color: "black",
          }}
        >
          <Button
            component={Link}
            to="/"
            onClick={() => handleButtonClick("home")}
            sx={{
              paddingX: 3,
              paddingY: 2,
              fontSize: "14px",
              color: activeButton === "home" ? "#a1887f" : "inherit",
              fontWeight: activeButton === "home" ? "bold" : "normal",
              borderBottom:
                activeButton === "home" ? "2px solid #a1887f" : "none",
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            onClick={() => handleButtonClick("about")}
            sx={{
              paddingX: 3,
              paddingY: 2,
              fontSize: "14px",
              color: activeButton === "about" ? "#a1887f" : "inherit",
              fontWeight: activeButton === "about" ? "bold" : "normal",
              borderBottom:
                activeButton === "about" ? "2px solid #a1887f" : "none",
            }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/features"
            onClick={() => handleButtonClick("features")}
            sx={{
              paddingX: 3,
              paddingY: 2,
              fontSize: "14px",
              color: activeButton === "features" ? "#a1887f" : "inherit",
              fontWeight: activeButton === "features" ? "bold" : "normal",
              borderBottom:
                activeButton === "features" ? "2px solid #a1887f" : "none",
            }}
          >
            Services
          </Button>
          <Button
            component={Link}
            to="/contact"
            onClick={() => handleButtonClick("contact")}
            sx={{
              paddingX: 3,
              paddingY: 2,
              fontSize: "14px",
              color: activeButton === "contact" ? "#a1887f" : "inherit",
              fontWeight: activeButton === "contact" ? "bold" : "normal",
              borderBottom:
                activeButton === "contact" ? "2px solid #a1887f" : "none",
            }}
          >
            Contact
          </Button>
          <Button
            onClick={handleOpen}
            sx={{
              paddingX: 3,
              paddingY: 2,
              fontSize: "14px",
              color: activeButton === "signin" ? "#a1887f" : "inherit",
              fontWeight: activeButton === "signin" ? "bold" : "normal",
              borderBottom:
                activeButton === "signin"
                  ? "2px solidrgb(239, 223, 217)"
                  : "none",
            }}
          >
            Sign In
          </Button>
        </Box>
      </Toolbar>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogContent>
          <FormSignIn onClose={handleClose} />
        </DialogContent>
      </Dialog>
    </AppBar>
  );
}

export default Navbar;
