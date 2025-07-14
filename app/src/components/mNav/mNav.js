import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import './mNav.css';

const routes = [
  { text: 'All Pro Landscaping', href: '/home' },
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
  { text: 'Portfolio', href: '/portfolio' },
  { text: 'Services', href: '/services' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#fff', color: '#000' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon className="logo-icon" />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            className="logo-text"
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {routes.map((route) => (
                <MenuItem key={route.text} onClick={handleCloseNavMenu}>
                  <Typography
                    component={RouterLink}
                    to={route.href}
                    className="menu-text"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {route.text}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* <AdbIcon className="mobile-logo-icon" />
          <Typography
            variant="h5"
            noWrap
            component={RouterLink}
            to="/"
            className="mobile-logo-text"
          >
            LOGO
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {routes.map((route) => (
              <Button
                key={route.text}
                component={RouterLink}
                to={route.href}
                className="nav-button"
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
