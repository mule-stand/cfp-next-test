'use client'

import {createContext, PropsWithChildren, useContext, } from 'react'
import { ShopData} from "../model";

type TestContextValue = ShopData | null

const TestContext = createContext<TestContextValue>(null)

type TestProviderProps = PropsWithChildren<{
  shopData: ShopData
}>

export const TestProvider = ({ shopData, children }: TestProviderProps) => {
  // const [shopData, setShopData] = useState<ShopData | null>(null)
  // useEffect( () => {
  //   getShopData().then((shopData) => {
  //     setShopData(shopData)
  //   })
  // }, [])
  // if (!shopData) return null
  return <TestContext.Provider value={shopData}>{children}</TestContext.Provider>
}

export const useTestContext = () => {
  const contextValue = useContext(TestContext)

  if (!contextValue) {
    throw new ReferenceError(
      'context value is null. please wrap your application with <TestProvider>'
    )
  }

  return contextValue
}
