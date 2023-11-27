'use client'

import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import { usePathname } from 'next/navigation';
import Title from '#user-interface/components/Title';

const { Content } = Layout;

const LayoutDashboardContent = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const fullPath = usePathname();

  const generatePageMeta = (fullPath: string) => {
    switch (fullPath) {
      case '/dashboard/twitter/reply-mention':
        return {
          title: 'Auto Reply Mention',
          breadcrumbs: [
            {
              title: <a href="/dashboard">Home</a>
            },
            {
              title: <a href="/dashboard/twitter">Twitter</a>
            },
            {
              title: 'Reply Mention Automatically'
            }
          ]
        }
      case '/dashboard/twitter/manual-reply':
        return {
          title: 'Manual Reply Tweet',
          breadcrumbs: [
            {
              title: <a href="/dashboard">Home</a>
            },
            {
              title: <a href="/dashboard/twitter">Twitter</a>
            },
            {
              title: 'Reply Tweet Manually'
            }
          ]
        }
      default:
        return {
          title: '',
          breadcrumbs: []
        }
    }
  }

  const { title, breadcrumbs } = generatePageMeta(fullPath);

  return (
    <Content style={{ margin: '64px 16px 0' }}>
      <div style={{ marginBottom: 16 }}>
        <Title text={title} level={4} style={{ marginTop: 0 }} />
        <Breadcrumb items={breadcrumbs} />
      </div>
      <div style={{ padding: 24, minHeight: '70%', background: colorBgContainer }}>
        {children}
      </div>
    </Content>
  );
};

export default LayoutDashboardContent;
