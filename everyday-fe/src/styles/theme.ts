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
      default: '#f5f5f5',
    },
  },
  typography: {
    button: {
      textTransform: 'none', // 이거 없음 영어 다 대문자로 됨.
    },
    fontFamily: ['Nanum Gothic', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableRipple: true,
      },
    },
  },
});
