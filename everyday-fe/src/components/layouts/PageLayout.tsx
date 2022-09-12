import BottomNav from '@components/layouts/bottomNav/BottomNav';
import Header from '@components/layouts/header/Header';
import { Box } from '@mui/material';
import React from 'react';

type Props = React.PropsWithChildren & {};

// TODO: 서스펜스, 에러바운더리
export default function PageLayout({ children }: Props) {
  return (
    <>
      <Header />

      <Box
        component="main"
        sx={{
          paddingLeft: 5,
          paddingRight: 5,
        }}
      >
        {children}
      </Box>

      <BottomNav />
    </>
  );
}
