'use client'
import { useQuery } from 'convex/react'

import { podcastData } from '@/constants'
import PodcastCard from '@/components/shared/PodcastCard'
import { api } from '../../../convex/_generated/api'

export default function HomePage() {
	const tasks = useQuery(api.tasks.get)

	return (
		<div className='mt-9 flex flex-col gap-9 md:overflow-hidden'>
			<section className='flex flex-col gap-5'>
				<h1 className='text-20 font-bold text-white-1'>Trending Podcasts</h1>

				<main className='flex min-h-screen flex-col items-center justify-between p-24'>
					{tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
				</main>

				<div className='podcast_grid'>
					{podcastData?.map(({ id, title, description, imgURL }) => (
						<PodcastCard
							key={id}
							imgUrl={imgURL}
							title={title}
							description={description}
							podcastId={id}
						/>
					))}
				</div>
			</section>
		</div>
	)
}
