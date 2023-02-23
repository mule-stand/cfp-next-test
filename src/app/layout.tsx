import { ReactNode } from 'react'
import { getShopData } from '../model'
import { TestProvider } from '../test-context'

type RootLayoutProps = { children: ReactNode }

const RootLayout = async ({ children }: RootLayoutProps) => {
  const shopData = await getShopData()
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <TestProvider shopData={shopData}>{children}</TestProvider>
      </body>
    </html>
  )
}

export default RootLayout
