import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// large screen logo
export const LogoText = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(2),
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'black',
  textDecoration: 'none',
}));

// mobile logo
export const MobileLogoText = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(2),
  display: 'flex',
  flexGrow: 1,
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  fontFamily: 'times',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
}));

// menu item text
export const MenuItemText = styled(Typography)({
  textAlign: 'center',
});
