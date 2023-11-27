'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import {  Layout, Menu } from 'antd';
import {
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { usePathname } from 'next/navigation';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const LayoutDashboardSider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const fullPath = usePathname();

  const items: MenuItem[] = [
    getItem(<Link href="/author">Author</Link>, '/author', <PieChartOutlined />),
    getItem(<Link href="/category">Category</Link>, '/category', <DesktopOutlined />),
    getItem(<Link href="/tag">Tag</Link>, '/tag', <ContainerOutlined />),
    getItem(<Link href="/quote">Quote</Link>, '/quote', <ContainerOutlined />),
  
    getItem('Twitter', 'sub1', <MailOutlined />, [
      getItem(<Link href="/dashboard/twitter/reply-mention">Reply Mention</Link>, '/dashboard/twitter/reply-mention'),
      getItem(<Link href="/dashboard/twitter/post-tweet">Post Tweet</Link>, '/dashboard/twitter/post-tweet'),
      getItem(<Link href="/dashboard/twitter/manual-reply">Manual Reply</Link>, '/dashboard/twitter/manual-reply'),
    ]),
  ];

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme='light'>
      <Menu
        defaultSelectedKeys={[fullPath]}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
        style={{
          overflow: 'auto',
          marginTop: '72px',
        }}
      />
    </Sider>
  );
};

export default LayoutDashboardSider;
