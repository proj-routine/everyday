import { Button, Stack } from '@mui/material';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <h1>EveryDay Routine</h1>

      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <Button color="primary">primary</Button>
          <Button color="secondary">secondary</Button>
          <Button color="error">error</Button>
          <Button color="warning">warning</Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" color="primary">
            primary
          </Button>
          <Button variant="outlined" color="secondary">
            secondary
          </Button>
          <Button variant="outlined" color="error">
            error
          </Button>
          <Button variant="outlined" color="warning">
            warning
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="text" color="primary">
            primary
          </Button>
          <Button variant="text" color="secondary">
            secondary
          </Button>
          <Button variant="text" color="error">
            error
          </Button>
          <Button variant="text" color="warning">
            warning
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
