import { ArrowLongRightIcon, ArrowRightCircleIcon, ArrowRightIcon, CheckCircleIcon, MinusIcon } from '@heroicons/react/16/solid'
import { Link } from '@inertiajs/react'
import React from 'react'

const CardSpecialty = ({ specialty }) => {
    return (
        <div className='rounded-xl overflow-hidden flex flex-col  bg-white border'>
            <img src="/img/specialties/specialty-1.jpg" className='object-cover object-center' alt="" />
            <div className='px-8 pt-8 pb-6 h-full flex flex-col gap-y-4 text-lg'>

                <Link href={route('specialty', specialty.slug)} className='flex items-center' >
                    <h3 className='text-primary-700 text-2xl font-semibold'>{specialty.name}</h3>

                </Link>
                <p className='opacity-80 font-light '>
                    {specialty.entry}
                </p>
                <ol className='opacity-80'>
                    {specialty.surgeries.map((surgery) => (
                        <li key={surgery.id}>
                            <Link className='flex text-primary-700 hover:translate-x-1 transition-transform'>
                                {surgery.name}
                                <ArrowRightIcon className='w-6 h-4 mr-1.5 mt-1.5 ' />
                            </Link>

                        </li>
                    ))}
                </ol>
                <div className='grow flex  flex-col items-end justify-end'>
                    <div className='mt-4'>
                        <Link href={route('specialty', specialty.slug)} className='text-base text-primary-700'>
                            <div className='flex items-center font-medium'>
                                Mas detalles de la especialidad
                                <ArrowRightIcon className='w-4 h-4 ml-2' />
                            </div>

                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardSpecialty
