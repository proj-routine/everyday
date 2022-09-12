import SettingsIcon from '@mui/icons-material/Settings';
import {
  AppBar,
  AppBarProps,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';

type Props = AppBarProps & {};

export default function Header({ sx, ...rest }: Props) {
  return (
    <AppBar
      position="sticky"
      sx={{
        display: 'flex',
        minHeight: '40px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingX: 5,
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        backgroundColor: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.primary.main,
        boxShadow: 0,
        ...sx,
      }}
      {...rest}
    >
      <Typography variant="subtitle1">EveryDay Routine</Typography>

      <Stack direction="row" spacing={0}>
        <IconButton sx={{ padding: 1 }} color="inherit">
          <SettingsIcon />
        </IconButton>
      </Stack>
    </AppBar>
  );
}
