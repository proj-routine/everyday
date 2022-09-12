import PageLayout from '@components/layouts/PageLayout';
import { Box } from '@mui/material';
import React from 'react';

type Props = {};

export default function Meal(props: Props) {
  return (
    <PageLayout>
      <Box sx={{ height: '200vh' }}>
        <h1>Meal Page</h1>
      </Box>
    </PageLayout>
  );
}
