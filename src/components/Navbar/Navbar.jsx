import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import FormSignUp from "../Forms/Formsignup";
import FormSignIn from "../Forms/Formsignin";

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#D8C4B6" }}>
      <Toolbar>
        {/* Left Side: Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: "pointer" }}
        >
          MyLogo
        </Typography>

        {/* Right Side: Navigation Buttons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/about">
            About
          </Button>
          <Button color="inherit" href="/contact">
            Contact
          </Button>

          <FormSignIn />
          <FormSignUp />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
