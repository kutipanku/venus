import React from 'react';
import { Layout } from 'antd';
import { cssFullHeightAndWidth } from './style';
import Sider from '#user-interface/components/Sidebar';
import Content from '#user-interface/components/Content';
import Header from '#user-interface/components/Header';

const LayoutDashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout className={cssFullHeightAndWidth} style={{ height: '100%' }}>
      <Header />
      <Layout hasSider>
        <Sider />
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutDashboard;
