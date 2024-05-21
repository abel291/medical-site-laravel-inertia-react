import { ArrowLongRightIcon } from '@heroicons/react/16/solid'
import { Link } from '@inertiajs/react'
import React from 'react'

const Card = ({ title, entry, img, path = "" }) => {
    return (
        <div className='rounded-lg overflow-hidden border  bg-white max-w-lg h-full'>
            <div className='relative'>
                <img className='w-full object-cover aspect-video' src={img} alt="" />
                {/* <a class="opacity-0 hover:opacity-100 transition-opacity duration-300" rel="noreferrer" href={path} aria-label={title}>
                    <div class="absolute inset-0 flex justify-center items-center "></div>
                    <div class="absolute inset-0 bg-primary"></div>
                </a> */}
            </div>
            <div className=''>
                <Link href={path} className='text-white bg-primary flex items-center px-7 py-2 ' >
                    <h3 className='text-2xl font-medium  hover:translate-x-3 transition-transform'>{title}</h3>

                </Link>
                <p className='text-lg text-neutral-600  px-7 pt-3 pb-4'>{entry}</p>
            </div>
        </div>
    )
}

export default Card
