import { ArrowLongRightIcon } from '@heroicons/react/16/solid'
import { Link } from '@inertiajs/react'
import React from 'react'

const Card = ({ title, entry, img, path = "" }) => {
    return (
        <div className='rounded-lg overflow-hidden bg-white max-w-lg border '>
            <div className=' ' >
                <img src={img} className='object-cover object-center h-full aspect-video' alt="" />
            </div>

            <div className='px-8 pt-8 pb-6  flex flex-col '>
                <Link href={path} className='flex items-center text-primary-700 group '>
                    <h3 className='text-primary-700 text-2xl font-semibold'>{title}</h3>
                    <ArrowLongRightIcon className='w-7 h-6 ml-2 group-hover:translate-x-4 transition-transform ease-in-out' />
                </Link>
                <div className=' opacity-65  mt-3 '>
                    <p className='text-lg'>{entry}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
