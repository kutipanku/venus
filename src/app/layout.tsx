import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ConfigProvider } from 'antd';
import theme from '#user-interface/theme/themeConfig';
import { ApolloWrapper } from '#lib/apollo-client';

import StyledComponentsRegistry from '#lib/antd-registry';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" style={{ height: '100%', width: '100%' }}>
      <StyledComponentsRegistry>
        <ConfigProvider theme={theme}>
          <body className={inter.className} style={{ margin: 0, height: '100%', width: '100%' }}>
            <ApolloWrapper>{children}</ApolloWrapper>
          </body>
        </ConfigProvider>
      </StyledComponentsRegistry>
    </html>
  )
}
