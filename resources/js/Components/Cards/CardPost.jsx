import { Link } from '@inertiajs/react'
import React from 'react'

const CardPost = ({ title, entry, img, path = "" }) => {
    return (
        <div className='rounded-lg overflow-hidden shadow bg-white max-w-lg'>
            <div className='relative'>
                <img className='w-full object-cover aspect-video' src={img} alt="" />
                <a class="opacity-0 hover:opacity-100 transition-opacity duration-300" rel="noreferrer" href={path} aria-label={title}>
                    <div class="absolute inset-0 flex justify-center items-center "></div>
                    <div class="absolute inset-0 bg-primary"></div>
                </a>
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
