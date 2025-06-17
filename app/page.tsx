import { HomePage } from "@pages/HomePage"
import { SignIn } from "@pages/Auth"

export default function Home() {
	return (
		<div className='max-w-3xl flex flex-col items-center mx-auto'>
			{/* <head></head> */}
			<main className='grid grid-cols-4 xs:grid-cols-8 gap-x-4 px-6'>
				<SignIn />
			</main>
		</div>
	)
}
