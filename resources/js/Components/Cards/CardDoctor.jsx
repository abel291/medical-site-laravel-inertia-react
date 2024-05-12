import { Link } from '@inertiajs/react'
import React from 'react'

const CardDoctor = ({ doctor }) => {
    return (
        <div className=' bg-white max-w-lg'>
            <div className='relative overflow-hidden rounded-lg'>
                <Link
                    aria-label={doctor.name}>
                    <img src={doctor.thumb} className='w-full object-cover aspect-square' alt="" />
                </Link>
            </div>
            <div className='mt-5'>
                <span className='font-semibold text-primary-600'>{doctor.specialty.name}</span>
                <Link className='mt-1.5 ' href={doctor.slug} >
                    <h3 className='text-[22px] font-semibold  '>{doctor.name}</h3>
                </Link>
                {/* <p className='font-light text-lg   mt-2'>{doctor.entry}</p> */}
            </div>
        </div>
    )
}

export default CardDoctor
