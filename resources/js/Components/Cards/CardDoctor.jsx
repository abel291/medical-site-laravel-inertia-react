import { Link } from '@inertiajs/react'
import React from 'react'

const CardDoctor = ({ doctor }) => {
    return (
        <div className='  max-w-md'>
            <div className='relative overflow-hidden rounded-lg'>
                <Link href={route('doctor', doctor.slug)} aria-label={doctor.name} alt="">
                    <img src={doctor.thumb} className='w-full object-cover aspect-square transform transition-transform duration-300 ease-out hover:scale-110' />
                </Link>
            </div>
            <div className='mt-3'>
                {doctor.specialty && (
                    <Link
                        href={route('specialty', doctor.specialty.slug)}
                        className='font-medium text-primary mt-4 block '
                    >
                        {doctor.specialty.name}
                    </Link>
                )}
                <Link href={route('doctor', doctor.slug)}>
                    <h3 className='text-2xl font-semibold  mt-1 '>{doctor.name}</h3>
                </Link>

                <span className='font-light mt-1 inline-block text-neutral-400'>
                    Trabajando desde {doctor.startYear}
                </span>
                {/* <p className='font-light text-sm mt-2'>{doctor.entry}</p> */}
            </div>
        </div>
    )
}

export default CardDoctor
