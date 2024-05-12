import { Link } from '@inertiajs/react'
import React from 'react'

const CardPost = ({ title, entry, img, path = "" }) => {
    return (
        <div className='rounded-lg overflow-hidden shadow bg-white max-w-lg'>
            <div className='relative overflow-hidden'>
                <Link
                    href={path} aria-label={title}>
                    <img src={img} className='w-full object-cover aspect-video hover:scale-110 transition-transform duration-500 transform' alt="" />
                </Link>
            </div>
            <div className='p-6'>
                <Link href={path} >
                    <h3 className='text-2xl font-semibold text-primary-600 '>{title}</h3>
                </Link>
                <p className='font-light text-lg   mt-4'>{entry}</p>
            </div>
        </div>
    )
}

export default CardPost
