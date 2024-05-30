import TitleSection from '@/Components/TitleSection'
import { CheckCircleIcon } from '@heroicons/react/16/solid'
import { Link } from '@inertiajs/react'
import React from 'react'

const SurgeriesDoctor = ({ doctor }) => {
    return (
        <>
            <TitleSection title="Mis servicios" subTitle='SERVICIO' />
            <ol className='grid md:grid-cols-2 mt-8 font-medium gap-3'>
                {doctor.surgeries.map((surgery) => (
                    <li key={surgery.id} className='flex item-center'>
                        <CheckCircleIcon className='text-primary w-5 h-5 mr-2 mt-1 ' />
                        <Link className='text-primary' href={route('surgery', surgery.slug)}>
                            {surgery.name}
                        </Link>
                    </li>
                ))}

            </ol>
        </>
    )
}

export default SurgeriesDoctor
