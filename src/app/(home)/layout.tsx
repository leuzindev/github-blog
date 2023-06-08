import Image from 'next/image'
import backgroundHeader from '../../assets/headerBg.png'

import { ReactNode } from 'react'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="h-[296px] w-full bg-red-300">
        <Image src={backgroundHeader} className="w-full object-cover" />
      </header>
      <main>{children}</main>
    </>
  )
}
