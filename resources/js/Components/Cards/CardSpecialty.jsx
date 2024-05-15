import { ArrowLongRightIcon, ArrowRightCircleIcon, CheckCircleIcon } from '@heroicons/react/16/solid'
import { Link } from '@inertiajs/react'
import React from 'react'

const CardSpecialty = ({ specialty }) => {
    return (
        <div className='rounded-lg overflow-hidden flex flex-col'>
            <img src={specialty.thumb} className='object-cover object-center' alt="" />

            <div className='p-6  bg-primary text-white h-full   flex flex-col gap-y-3 text-lg'>
                <Link href={route('specialty', specialty.slug)} className='flex items-center' >
                    <h3>{specialty.name}</h3>
                    <ArrowLongRightIcon className='w-6 h-6 ml-4' />
                </Link>
                <p className='font-light  opacity-65 '>
                    {specialty.entry}
                </p>
                <ol className=' font-medium  space-y-1'>
                    {specialty.surgeries.map((surgery) => (
                        <li className='flex '>
                            <CheckCircleIcon className='w-6 h-6 mr-1.5 mt-0.5 text-orange-300' />
                            {surgery.name}

                        </li>
                    ))}
                </ol>
                <div className='grow flex  flex-col justify-end items-end'>
                    <div className='mt-4'>
                        <Link href={route('specialty', specialty.slug)} className='btn-orange'>
                            <div className='inline-flex items-center'>
                                Ver mas
                                <ArrowRightCircleIcon className='w-5 h-5 ml-2' />
                            </div>

                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardSpecialty
