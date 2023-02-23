'use client'

import Link from 'next/link'
import {useTestContext} from "../test-context";

export default function Home() {
  const shopData = useTestContext()
  console.log('home render')
  return (
    <div>
      <div>
        <Link href="/test">Test</Link>
      </div>
      {shopData.layout.settings.theme.color.background}
    </div>
  )
}
