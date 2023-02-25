import { ReactNode } from 'react'

type RootLayoutProps = { children: ReactNode }

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
