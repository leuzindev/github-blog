// import Image from 'next/image'
// import backgroundHeader from '../../assets/headerBg.png'

import { ReactNode } from 'react'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="h-[296px] w-full bg-base-border">
        {/* <Image src={backgroundHeader} className="w-full object-cover" /> */}
      </header>
      <main className="m-auto w-[1120px]">{children}</main>
    </>
  )
}
