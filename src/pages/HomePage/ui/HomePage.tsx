'use client'

import Link from "next/link"

import { useMantineTheme } from "@mantine/core"
import cls from "./HomePage.module.css"

const HomePage = () => {
	const theme = useMantineTheme();

	return (
		<div className={cls.homepage}>
			{/* test */}
			<p 
				style={{
					backgroundColor: theme.colors.primary[2]
				}}
			>
				Hello from{" "}
				<Link
					href="https://github.com/yunglocokid"
					target="_blank"
					className={cls.link}
				>
					yunglocokid
				</Link>
			</p>
			<pre className={cls.hint} data-testid="hint-code">
				You can edit <span className={cls.path}>src/pages/HomePage</span> to
				start {"<3"}!<br />
				<small className={cls.testHint}>
					You can also test your application using Jest :D. Try it!
				</small>
			</pre>
		</div>
	)
}

export default HomePage
