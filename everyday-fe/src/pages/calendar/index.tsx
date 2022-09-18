import DatePicker from '@components/calendar/DatePicker';
import PageLayout from '@components/layouts/PageLayout';
import React from 'react';

type Props = {};

export default function Calendar(props: Props) {
  return (
    <PageLayout>
      <DatePicker />
    </PageLayout>
  );
}
