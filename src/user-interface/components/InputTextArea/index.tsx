'use client'

import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

import type { TextAreaProps } from 'antd/es/input/TextArea';

const InputTextArea = (props: TextAreaProps) => {
  return (
    <TextArea {...props} style={{ marginBottom: 8 }} />
  )
};

export default InputTextArea;
