import PageLayout from '@components/layouts/PageLayout';
import { Box } from '@mui/material';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Box sx={{ height: '200vh' }}>
        <h1>EveryDay Routine Home</h1>
      </Box>
    </PageLayout>
  );
};

export default Home;
