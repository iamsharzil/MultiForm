import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  palette: {
    primary: {
      main: '#654de6',
    },
    secondary: {
      main: '#151b28',
    },
    info: {
      main: '#ddd',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiStep: {
      styleOverrides: {
        root: {
          padding: '0px',
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          color: '#727777',
        },
      },
    },

    MuiStepLabel: {
      styleOverrides: {
        iconContainer: {
          paddingRight: '0px',
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        body2: {
          color: '#727777',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
