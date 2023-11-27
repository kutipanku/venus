'use client'

import React from 'react';
import Dropdown from 'antd/es/dropdown';

const { Button } = Dropdown;

import type { DropdownButtonProps } from 'antd/es/dropdown/dropdown-button';
import type { MenuProps } from 'antd';

interface Props extends DropdownButtonProps {
  text?: string;
}

export type DropdownMenu = MenuProps;

const DropdownButton = (props: Props) => {
  const { text = 'Button', type = 'primary', onClick = () => {}, ...rest } = props;

  return (
    <Button
      type={type}
      onClick={onClick}
      {...rest}
    >
      {text}
    </Button>)
};

export default DropdownButton;
