import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Dialog,
  DialogContent,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import FormSignIn from "../Formsignin/Formsignin";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation(); // מזהה את הנתיב הנוכחי

  // פונקציה לפתיחת קישורים בטאב חדש
  const handleOpenNewTab = (url) => {
    const fullUrl = `${window.location.origin}${url}`;
    window.open(fullUrl, "_blank"); // פותח את הקישור בטאב חדש
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/features" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        color: "black",
        zIndex: 10,
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
            gap: 5,
            py: 2,
            flexGrow: 1,
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.path}
              onClick={() => handleOpenNewTab(item.path)} // שימוש ב-window.open
              sx={{
                paddingX: 3,
                paddingY: 2,
                fontSize: "14px",
                color: pathname === item.path ? "#a1887f" : "inherit",
                fontWeight: pathname === item.path ? "bold" : "normal",
                borderBottom: pathname === item.path ? "2px solid #a1887f" : "none",
              }}
            >
              {item.label}
            </Button>
          ))}
          <Button
            onClick={handleOpen} // פותח את דיאלוג ה-Sign In
            sx={{
              paddingX: 3,
              paddingY: 2,
              fontSize: "14px",
              color: pathname === "/signin" ? "#a1887f" : "inherit",
              fontWeight: pathname === "/signin" ? "bold" : "normal",
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
