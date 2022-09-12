import { createTheme, ThemeOptions } from '@mui/material';

export const theme: ThemeOptions = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#478cff',
    },
    secondary: {
      main: '#4f4f4f',
      contrastText: '#ffffff',
    },
    error: {
      main: '#e41b05',
    },
    warning: {
      main: '#f99405',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#333333',
    },
    background: {
      default: '#ffffff',
    },
    divider: '#e0e0e0',
  },
  typography: {
    fontSize: 14,
    button: {
      textTransform: 'none', // 이거 없음 영어 다 대문자로 됨.
    },
    fontFamily: ['Nanum Gothic', 'sans-serif'].join(','),
    h1: {
      fontSize: 24,
      fontWeight: 700,
    },
    h2: {
      fontSize: 18,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 700,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableRipple: true,
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: 'body2',
        lineHeight: 1.5,
        variantMapping: {
          subtitle1: 'strong',
          subtitle2: 'strong',
        },
      },
    },
  },
});
