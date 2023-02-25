import Link from 'next/link'
import {Test} from "./test";
import {getShopData} from "../../model";

const TestPage = async () => {
  const shopData = await getShopData()
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
        <Test />
        <pre>{JSON.stringify(shopData.products, null, 2)}</pre>
      </div>
    </div>
  )
}

export default TestPage
