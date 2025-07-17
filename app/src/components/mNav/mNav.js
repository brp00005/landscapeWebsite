import * as React from 'react';
import { AppBar, Toolbar, Box, Container, Button, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import { Link as RouterLink } from 'react-router-dom';

const routes = [
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
  { text: 'Gallery', href: '/portfolio' },
  { text: 'Services', href: '/services' },
];

function ResponsiveAppBar() {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: 'green',
        color: 'black',
        opacity: 1,
        boxShadow: 'none',
        height: '6vh',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            /* px: 2, */
            height: '100%',
            verticalAlign: 'center'
          }}
        >
          {/* logo icon and text */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2, color: 'black' }} />
            <Typography
              component={RouterLink}
              to="/home"
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontFamily: "'Times New Roman', serif",
                fontWeight: 700,
                fontSize: '30px',
                letterSpacing: '.1rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              All Pro Landscaping
            </Typography>
          </Box>

          {/* nav links */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '70px',
              ml: 'auto',
              justifyContent: 'center'
            }}
          >
            {routes.map((route) => (
              <Button
                key={route.text}
                component={RouterLink}
                to={route.href}
                sx={{
                  fontFamily: "'Times New Roman', serif",
                  fontSize: 30,
                  fontWeight: 300,
                  color: 'black',
                  textTransform: 'none',
                  p: '8px 16px',
                  '&:hover': {
                    backgroundColor: 'rgba(150, 150, 150, .5)',
                  },
                }}
              >
                {route.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
