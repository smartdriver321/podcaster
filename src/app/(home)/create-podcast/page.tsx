'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'
import GeneratePodcast from '@/components/shared/GeneratePodcast'
import GenerateThumbnail from '@/components/shared/GenerateThumbnail'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Loader } from 'lucide-react'

const voiceCategories = ['alloy', 'shimmer', 'nova', 'echo', 'fable', 'onyx']

const formSchema = z.object({
	podcastTitle: z.string().min(2),
	podcastDescription: z.string().min(2),
})

export default function CreatePodcastPage() {
	const [voiceType, setVoiceType] = useState<string | null>(null)
	const [isSubmitting, setIsSubmitting] = useState(false)

	const router = useRouter()

	const { toast } = useToast()
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			podcastTitle: '',
			podcastDescription: '',
		},
	})

	return (
		<section className='mt-10 flex flex-col'>
			<h1 className='text-20 font-bold text-white-1'>Create Podcast</h1>

			<Form {...form}>
				<form className='mt-12 flex w-full flex-col'>
					<div className='flex flex-col gap-[30px] border-b border-black-5 pb-10'>
						<FormField
							control={form.control}
							name='podcastTitle'
							render={({ field }) => (
								<FormItem className='flex flex-col gap-2.5'>
									<FormLabel className='text-16 font-bold text-white-1'>
										Title
									</FormLabel>

									<FormControl>
										<Input
											className='input-class focus-visible:ring-offset-orange-1'
											placeholder='JSM Pro Podcast'
											{...field}
										/>
									</FormControl>

									<FormMessage className='text-white-1' />
								</FormItem>
							)}
						/>

						<div className='flex flex-col gap-2.5'>
							<Label className='text-16 font-bold text-white-1'>
								Select AI Voice
							</Label>

							<Select onValueChange={(value) => setVoiceType(value)}>
								<SelectTrigger
									className={cn(
										'text-16 w-full border-none bg-black-1 text-gray-1 focus-visible:ring-offset-orange-1'
									)}
								>
									<SelectValue
										placeholder='Select AI Voice'
										className='placeholder:text-gray-1 '
									/>
								</SelectTrigger>

								<SelectContent className='text-16 border-none bg-black-1 font-bold text-white-1 focus:ring-orange-1'>
									{voiceCategories.map((category) => (
										<SelectItem
											key={category}
											value={category}
											className='capitalize focus:bg-orange-1'
										>
											{category}
										</SelectItem>
									))}
								</SelectContent>
								{voiceType && (
									<audio
										src={`/${voiceType}.mp3`}
										autoPlay
										className='hidden'
									/>
								)}
							</Select>
						</div>

						<FormField
							control={form.control}
							name='podcastDescription'
							render={({ field }) => (
								<FormItem className='flex flex-col gap-2.5'>
									<FormLabel className='text-16 font-bold text-white-1'>
										Description
									</FormLabel>

									<FormControl>
										<Textarea
											className='input-class focus-visible:ring-offset-orange-1'
											placeholder='Write a short podcast description'
											{...field}
										/>
									</FormControl>

									<FormMessage className='text-white-1' />
								</FormItem>
							)}
						/>
					</div>

					<div className='flex flex-col pt-10'>
						<GeneratePodcast />

						<GenerateThumbnail />

						<div className='mt-10 w-full'>
							<Button
								type='submit'
								className='text-16 w-full bg-orange-1 py-4 font-extrabold text-white-1 transition-all duration-500 hover:bg-black-1'
							>
<<<<<<< HEAD
								{isSubmitting ? (
									<>
										Submitting
										<Loader size={20} className='animate-spin ml-2' />
									</>
								) : (
									'Submit & Publish Podcast'
								)}
=======
								Submitting
>>>>>>> 0a3f39b7b617fcb2ead7c5ea091966a6bf418c8e
							</Button>
						</div>
					</div>
				</form>
			</Form>
		</section>
	)
}
