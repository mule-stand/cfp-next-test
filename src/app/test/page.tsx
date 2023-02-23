'use client'

import Link from 'next/link'
import {Test} from "../../test";
import {useTestContext} from "../../test-context";

const TestPage = () => {
  const shopData = useTestContext()
  console.log('test render')
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
      </div>
      <pre>{JSON.stringify(shopData.layout)}</pre>
      <Test />
    </div>
  )
}

export default TestPage
