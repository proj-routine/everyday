import '@styles/index.css';

import AppLayout from '@components/layouts/AppLayout';
import { ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { theme } from '@styles/theme';
import koLocale from 'date-fns/locale/ko';
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
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={koLocale}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </LocalizationProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
