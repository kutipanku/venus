'use client'

import React from 'react';
import Typography from 'antd/es/typography';

const { Text } = Typography;

import type { TextProps } from 'antd/es/typography/Text';

interface Props extends TextProps {
  text?: string;
}

const TextComponent = (props: Props) => {
  const { text = 'Text', ...rest } = props;

  return (
    <Text {...rest} style={{ marginBottom: 8 }}>
      {text}
    </Text>)
};

export default TextComponent;
