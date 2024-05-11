import { ArrowLongRightIcon } from '@heroicons/react/16/solid'
import { Link } from '@inertiajs/react'
import React from 'react'

const Card = ({ title, entry, img, path = "" }) => {
    return (
        <div className='rounded-lg overflow-hidden border  bg-white'>
            <div className='relative'>
                <img className='w-full object-cover aspect-video' src={img} alt="" />
                {/* <a class="opacity-0 hover:opacity-100 transition-opacity duration-300" rel="noreferrer" href={path} aria-label={title}>
                    <div class="absolute inset-0 flex justify-center items-center "></div>
                    <div class="absolute inset-0 bg-primary"></div>
                </a> */}
            </div>
            <div className='px-6 pt-6 pb-4'>
                <Link href={path} className='text-primary-600 flex items-center' >
                    <h3 className='text-2xl font-semibold  '>{title}</h3>
                    <ArrowLongRightIcon className='w-6 h-6 ml-4' />
                </Link>
                <p className='text-lg text-neutral-600 mt-3'>{entry}</p>
            </div>
        </div>
    )
}

export default Card
