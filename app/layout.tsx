import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import localFont from 'next/font/local'
import '@app/styles/global.css'

const pretendard = localFont({
  src: '../public/fonts/pretendard/woff2/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard'
})

export const metadata: Metadata = {
  title: "유멘토",
  description: '멘토링 플랫폼 유멘토',
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body>{children}</body>
    </html>
  )
}
