import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Left Side: Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: 'pointer' }}
        >
          MyLogo
        </Typography>

        {/* Right Side: Navigation Buttons */}
        <Box>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/about">About</Button>
          <Button color="inherit" href="/contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
