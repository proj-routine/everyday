import '@styles/index.css';

import AppLayout from '@components/layouts/AppLayout';
import { ThemeProvider } from '@mui/material';
import { theme } from '@styles/theme';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {/* TODO: title을 각각 페이지 레벨에서 선언해야 한다. */}
        <title>Every Day</title>
      </Head>
      <ThemeProvider theme={theme}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
