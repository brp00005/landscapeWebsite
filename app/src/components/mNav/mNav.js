/* MUI uses a system of breakpoints based on screen width:
Breakpoint	Screen Type	Range
xs	Extra small	0px and up
sm	Small	600px and up
md	Medium (desktop)	900px and up
lg	Large	1200px and up
xl	Extra large	1536px and up */

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { Link as RouterLink } from 'react-router-dom';

const routes = [
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
  { text: 'Gallery', href: '/portfolio' },
  { text: 'Services', href: '/services' }
];

function ResponsiveAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#13271aff',
        color: 'red',
        boxShadow: 'none',
        height: '6vh'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
            height: '100%'
          }}
        >
          {/* logo and title */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AdbIcon sx={{ mr: 2, color: 'White' }} />
            <Typography
              component={RouterLink}
              to="/home"
              sx={{
                fontFamily: "'Times New Roman', serif",
                fontWeight: 700,
                fontSize: { xs: '20px', sm: '20px', md: '30px' },
                letterSpacing: '.1rem',
                color: '#cececeff',
                textDecoration: 'none'
              }}
            >
              All Pro Landscaping
            </Typography>
          </Box>

          {/* desktop links */}
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' }, gap: '40px' }}>
            {routes.map((route) => (
              <Button
                key={route.text}
                component={RouterLink}
                to={route.href}
                sx={{
                  fontFamily: "'Times New Roman', serif",
                  fontSize: 30,
                  fontWeight: 700,
                  color: '#cececeff',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#555555'
                  }
                }}
              >
                {route.text}
              </Button>
            ))}
          </Box>

          {/* mobile menu button */}
          <Box sx={{ display: { sm: 'flex', lg: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenMenu}
              sx={{ p: 0, color: "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              PaperProps={{
                sx: {
                  backgroundColor: '#273f2fff'
                }
              }}
            >
              {routes.map((route) => (
                <MenuItem key={route.text} onClick={handleCloseMenu}>
                  <Button
                    component={RouterLink}
                    to={route.href}
                    sx={{
                      textTransform: 'none',
                      fontFamily: "'Times New Roman', serif",
                      fontSize: { xs: '20px', sm: '25px', md: '20px' },
                      backgroundColor: "inherit",
                      color: "white",
                      height: "10px"
                    }}
                  >
                    {route.text}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

