import Card from '@/Components/Cards/Card'
import TitleSection from '@/Components/TitleSection'
import { Link, usePage } from '@inertiajs/react'
import React from 'react'

const ServicesHome = () => {
	const { specialties } = usePage().props

	return (
		<div className='py-section'>
			<div className='container'>
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8'>
					<TitleSection title="Estamos proporcionando los mejores servicios." subTitle="ESPECIALIDADES MÉDICAS" />

					{specialties.map((specialty) => (
						<Card key={specialty.id} path={route('specialty', specialty.slug)} title={specialty.name} entry={specialty.entry} img={specialty.thumb} />
					))}

				</div>
			</div>
		</div>
	)
}

export default ServicesHome
