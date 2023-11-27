'use client'

import React from 'react';
import DropdownButton from '#user-interface/components/DropdownButton';
import type { DropdownMenu } from '#user-interface/components/DropdownButton';

const onMenuClick: DropdownMenu['onClick'] = (e) => {
  console.log('click', e);
};

const items: DropdownMenu['items'] = [
  {
    key: '1',
    label: '1st item',
  },
  {
    key: '2',
    label: '2nd item',
  },
  {
    key: '3',
    label: '3rd item',
  },
];

const HomePage = () => (
  <DropdownButton menu={{ items, onClick: onMenuClick }} />
);

export default HomePage;
