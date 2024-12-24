import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Dialog,
  DialogContent,
} from "@mui/material";
import { Link } from "react-router-dom"; // ייבוא Link מ-react-router-dom
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
    <AppBar position="static" elevation={0} sx={{ backgroundColor: "#d7ccc8", color: "#a1887f" }}>
      <Toolbar>
        {/* כפתורי ניווט */}
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            gap: 7,
            py: 2,
            mt: "auto",
            flexGrow: 1,
            color: "black",
          }}
        >
          <Button
            component={Link} // שימוש ב-Link במקום href
            to="/"
            onClick={() => handleButtonClick("home")}
            sx={{
              paddingX: 3,
              paddingY: 2,
              height: "60px",
              fontSize: "14px",
              color: activeButton === "home" ? "#a1887f" : "inherit",
              fontWeight: activeButton === "home" ? "bold" : "normal",
              borderBottom: activeButton === "home" ? "2px solid #a1887f" : "none",
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
            component={Link}
            to="/features"
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
          <Button
            component={Link}
            to="/contact"
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
            onClick={handleOpen}
            sx={{
              paddingX: 3,
              paddingY: 2,
              height: "60px",
              fontSize: "14px",
              color: activeButton === "signin" ? "#a1887f" : "inherit",
              fontWeight: activeButton === "signin" ? "bold" : "normal",
              borderBottom: activeButton === "signin" ? "2px solidrgb(239, 223, 217)" : "none",
            }}
          >
            Sign In
          </Button>
        </Box>
      </Toolbar>

      {/* דיאלוג להצגת טופס ההתחברות */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogContent>
          <FormSignIn />
        </DialogContent>
      </Dialog>
    </AppBar>
  );
}

export default Navbar;
