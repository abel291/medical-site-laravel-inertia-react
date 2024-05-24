import { ArrowRightIcon, CheckCircleIcon, MinusIcon } from '@heroicons/react/16/solid'
import { Link } from '@inertiajs/react'
import React from 'react'
import LinkArrowIcon from '@/Components/LinkArrowIcon'

const CardSpecialty = ({ specialty }) => {
    return (
        <div className='rounded-xl overflow-hidden flex flex-col  bg-white border'>
            <img src={specialty.thumb} className='object-cover object-center' alt="" />
            <div className='px-8 pt-8 pb-6 h-full flex flex-col  text-lg'>

                <Link href={route('specialty', specialty.slug)} className='flex items-center' >
                    <h3 className='text-primary-700 text-2xl font-semibold'>{specialty.name}</h3>
                </Link>
                <p className='opacity-60  mt-2'>
                    {specialty.entry}
                </p>
                <ol className='opacity-80 mt-2'>
                    {specialty.surgeries.map((surgery) => (
                        <li key={surgery.id}>
                            <Link href={route('surgery', surgery.slug)} className='flex text-primary-700 hover:translate-x-1 transition-transform'>
                                <MinusIcon className='w-4 mr-2' />
                                {surgery.name}
                            </Link>

                        </li>
                    ))}
                </ol>
                <div className='grow flex  flex-col items-end justify-end mt-6'>
                    <div className=' text-base'>
                        <LinkArrowIcon path={route('specialty', specialty.slug)} >
                            Mas detalles
                        </LinkArrowIcon>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardSpecialty
