import { APP_MAX_WIDTH } from '@constants/constants';
import { Container } from '@mui/material';
import React from 'react';

type Props = React.PropsWithChildren;

export default function AppLayout({ children }: Props) {
  return (
    <Container
      sx={{
        display: 'flex',
        maxWidth: `${APP_MAX_WIDTH}px !important`,
        minHeight: '100vh',
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
