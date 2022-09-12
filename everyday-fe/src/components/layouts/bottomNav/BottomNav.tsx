import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { useRouter } from 'next/router';
import React, { SyntheticEvent, useCallback, useMemo } from 'react';

type BottomNavValue = 'Home' | 'Calendar' | 'Meal';

interface IBottomNav {
  label: BottomNavValue;
  value?: BottomNavValue;
  icon: React.ReactNode;
}

const BOTTOM_NAV: IBottomNav[] = [
  {
    label: 'Home',
    icon: <HomeIcon />,
  },
  {
    label: 'Calendar',
    icon: <CalendarMonthIcon />,
  },
  {
    label: 'Meal',
    icon: <RestaurantIcon />,
  },
];

export default function BottomNav() {
  const { pathname, push } = useRouter();

  const navValue: BottomNavValue = useMemo(() => {
    switch (pathname) {
      case '/calendar':
        return 'Calendar';
      case '/meal':
        return 'Meal';
      case '/':
      default:
        return 'Home';
    }
  }, [pathname]);

  const handleNavChange = useCallback(
    (event: SyntheticEvent, newValue: BottomNavValue) => {
      switch (newValue) {
        case 'Home':
          push('/');
          break;
        case 'Calendar':
          push('/calendar');
          break;
        case 'Meal':
          push('/meal');
          break;
        default:
          return;
      }
    },
    [push],
  );

  return (
    <Box
      sx={{
        position: 'sticky',
        bottom: 0,
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <BottomNavigation showLabels value={navValue} onChange={handleNavChange}>
        {BOTTOM_NAV.map((navMenu, index) => (
          <BottomNavigationAction
            key={index}
            label={navMenu.label}
            value={navMenu.value ?? navMenu.label}
            icon={navMenu.icon}
            sx={{ typography: 'subtitle2' }}
            disableRipple
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
