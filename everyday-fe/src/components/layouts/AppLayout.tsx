import { APP_MAX_WIDTH } from '@constants/constants';
import { Container } from '@mui/material';
import React, { useEffect } from 'react';

type Props = React.PropsWithChildren;

export default function AppLayout({ children }: Props) {
  useEffect(() => {
    function setScreenSize() {
      let vh = window.innerHeight * 0.01;

      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setScreenSize();

    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);

  return (
    <Container
      sx={{
        display: 'flex',
        maxWidth: `${APP_MAX_WIDTH}px !important`,
        minHeight: 'var(--100vh)',
        flexDirection: 'column',
        paddingX: '0 !important',
        boxShadow: '0px 0px 16px rgb(50 50 50 / 12%)',
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      {children}
    </Container>
  );
}
