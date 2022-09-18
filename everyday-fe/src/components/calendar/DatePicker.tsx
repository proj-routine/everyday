import { CalendarPicker, PickersDay } from '@mui/x-date-pickers';
import { add, lastDayOfYear } from 'date-fns';
import React, { useState } from 'react';

type Props = {};

const minDate = new Date(2020, 1, 1, 0, 0, 0);
const maxDate = lastDayOfYear(add(new Date(), { years: 1 }));

export default function DatePicker(props: Props) {
  const [date, setDate] = useState<Date | null>(new Date());
  return (
    <>
      <CalendarPicker
        openTo="day"
        date={date}
        minDate={minDate}
        maxDate={maxDate}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderDay={(day, _value, DayComponentProps) => (
          <PickersDay
            {...DayComponentProps}
            sx={{
              backgroundColor: (theme) => {
                if (DayComponentProps.selected) {
                  return theme.palette.primary.main;
                }
                return theme.palette.background.default;
              },

              '&.Mui-selected': {
                '&:hover, &:focus': {
                  backgroundColor: (theme) => theme.palette.primary.main,
                },
              },
            }}
          />
        )}
      />
    </>
  );
}
