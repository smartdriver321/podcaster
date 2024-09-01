export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='relative flex flex-col'>
			<main className='relative flex bg-black-3'>
				LeftSidebar
				{children}
				RightSidebar
			</main>
		</div>
	)
}
