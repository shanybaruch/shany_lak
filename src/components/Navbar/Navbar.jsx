import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button, Dialog, DialogContent } from "@mui/material";
import FormSignIn from "../Formsignin/Formsignin"; 


function Navbar() {
  const [open, setOpen] = useState(false); // מצב של פתיחת וסגירת החלון

  // פונקציות לפתיחה וסגירה של ה-Dialog
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AppBar position="fixed" sx={{backgroundColor: "#B6A28E"}} >
      <Toolbar>
        {/* לוגו בצד שמאל */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: "pointer" }}
        > Logo
           
        </Typography>

        {/* כפתורי ניווט בצד ימין */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 8, py: 3, // מרווח אנכי
          mt: "auto" }}>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/about">About</Button>
          <Button color="inherit" href="/contact">Contact</Button>
          <Button color="inherit" href="/Features">Features</Button>
         

          {/* כפתור לפתיחת הדיאלוג */}
          <Button color="inherit" onClick={handleOpen}>
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
