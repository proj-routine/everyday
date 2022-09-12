import '@styles/index.css';

import AppLayout from '@components/layouts/AppLayout';
import { ThemeProvider } from '@mui/material';
import { theme } from '@styles/theme';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}

export default MyApp;
