'use client'

import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const LayoutDashboardHeader = () => (
  <Header
    style={{
      position: 'fixed',
      top: 0,
      zIndex: 1,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    }}>
    <div className="demo-logo" />
  </Header>
);

export default LayoutDashboardHeader;
