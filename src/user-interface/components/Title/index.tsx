'use client'

import React from 'react';
import Typography from 'antd/es/typography';

const { Title } = Typography;

import type { TitleProps } from 'antd/es/typography/Title';

interface Props extends TitleProps {
  text?: string;
}

const TitleComponent = (props: Props) => {
  const { text = 'Title', ...rest } = props;

  return (
    <Title {...rest} style={{ marginBottom: 8 }}>
      {text}
    </Title>)
};

export default TitleComponent;
