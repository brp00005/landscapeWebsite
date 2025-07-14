import * as React from 'react';
import { AppBar, Toolbar, Box, Container, Button, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import { Link as RouterLink } from 'react-router-dom';

const routes = [
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
  { text: 'Portfolio', href: '/portfolio' },
  { text: 'Services', href: '/services' },
];

function ResponsiveAppBar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#fff',
        color: 'black',
        opacity: 0.8,
        
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: 64,
            px: 2,
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
                fontSize: 30,
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
              gap: '80px',
              ml: 'auto',
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
                  fontWeight: 700,
                  color: 'black',
                  textTransform: 'none',
                  p: '8px 16px',
                  '&:hover': {
                    backgroundColor: 'rgba(128, 128, 128, 0.1)',
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
