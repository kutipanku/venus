'use client'

import React from 'react';
import { Button, Popconfirm } from 'antd';

import type { TitleProps } from 'antd/es/typography/Title';

interface Props extends TitleProps {
  title: string;
  description: string;
  buttonText: string;
  isDanger?: boolean;
  onConfirm: (e?: React.MouseEvent<HTMLElement>) => void;
  onCancel: (e?: React.MouseEvent<HTMLElement>) => void;
}

const PopconfirmButton = (props: Props) => {
  const { title, description, buttonText, isDanger, onConfirm, onCancel } = props;

  return (
    <Popconfirm
      title={title}
      description={description}
      onConfirm={onConfirm}
      onCancel={onCancel}
      okText="Yes"
      cancelText="No"
    >
      <Button danger={isDanger} type="primary" size="small">{buttonText}</Button>
    </Popconfirm>
  )
};

export default PopconfirmButton;
