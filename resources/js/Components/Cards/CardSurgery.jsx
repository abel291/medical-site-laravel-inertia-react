import PriceDescription from '@/Pages/Surgery/PriceDescription'
import { ArrowLongRightIcon, ArrowRightCircleIcon, CalendarDaysIcon, CalendarIcon, CheckCircleIcon } from '@heroicons/react/16/solid'
import { Link } from '@inertiajs/react'
import React from 'react'

const CardSurgery = ({ surgery }) => {
    return (
        <div className='rounded-lg overflow-hidden flex  bg-white '>
            <div className='lg:w-4/12 ' >
                <img src={surgery.thumb} className='object-cover object-center h-full' alt="" />
            </div>

            <div className='lg:w-8/12 px-8 pt-10 pb-8  bg-white h-full  flex flex-col '>
                <Link href={route('surgery', surgery.slug)} className='flex items-center text-primary-700 group '>
                    <h3 className='text-primary-700 text-2xl font-semibold'>{surgery.name}</h3>
                    <ArrowLongRightIcon className='w-7 h-6 ml-2 group-hover:translate-x-4 transition-transform ease-in-out' />
                </Link>
                <div className=' opacity-65  mt-3 '>
                    <p className='text-lg'>{surgery.entry}</p>
                </div>


                <div className='mt-4'>
                    <PriceDescription />
                </div>
            </div>
        </div>
    )
}

export default CardSurgery
