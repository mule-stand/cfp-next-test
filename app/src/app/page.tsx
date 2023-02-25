import Link from 'next/link'
import {getShopData} from "../model";

const Home = async () => {
  const shopData = await getShopData()
  return (
    <div>
      <div>
        <Link href="/test">Test</Link>
        <pre>{JSON.stringify(shopData.layout, null, 2)}</pre>
      </div>
    </div>
  )
}

export default Home
