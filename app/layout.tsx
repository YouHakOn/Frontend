import type { Metadata } from "next"
import type { ReactNode } from "react"

import localFont from "next/font/local"
import "@mantine/core/styles.css"
import "@app/styles/global.css"
import ThemeProvider from "@app/providers/ThemeProvider"

const pretendard = localFont({
	src: '../public/fonts/pretendard/woff2/PretendardVariable.woff2',
	display: 'swap',
	weight: '100 900',
	variable: '--font-pretendard',
})

export const metadata: Metadata = {
	title: "Let's Develop!",
	description: "FSD Template with Next.js by yunglocokid",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="ko" className={`${pretendard.variable}`}>
			<body>
				<ThemeProvider>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
