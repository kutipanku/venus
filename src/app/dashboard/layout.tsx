import LayoutDashboard from '#user-interface/layouts/dashboard';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LayoutDashboard>
      {children}
    </LayoutDashboard>
  )
}
