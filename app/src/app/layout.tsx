import { ReactNode } from 'react'
import { getShopData } from '../model'
import { TestProvider } from '../test-context'

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
