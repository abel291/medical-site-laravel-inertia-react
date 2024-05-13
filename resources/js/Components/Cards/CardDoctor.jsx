import { Link } from '@inertiajs/react'
import React from 'react'

const CardDoctor = ({ doctor }) => {
    return (
        <div className=' bg-white max-w-lg'>
            <div className='relative overflow-hidden rounded-lg'>
                <Link
                    href={route('doctor', doctor.slug)}
                    aria-label={doctor.name}>
                    <img src={doctor.thumb} className='w-full object-cover aspect-square' alt="" />
                </Link>
            </div>
            <div className='mt-5'>
                <Link href={route('service', doctor.specialty.slug)} className='font-semibold text-primary'>{doctor.specialty.name}</Link>
                <Link
                    href={route('doctor', doctor.slug)}
                    className='mt-1.5 '  >
                    <h3 className='text-[22px] font-semibold  '>{doctor.name}</h3>
                </Link>
                {/* <p className='font-light text-lg   mt-2'>{doctor.entry}</p> */}
            </div>
        </div>
    )
}

export default CardDoctor
