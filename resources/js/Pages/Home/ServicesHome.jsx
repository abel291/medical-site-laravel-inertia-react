import Card from '@/Components/Cards/Card'
import TitleSection from '@/Components/TitleSection'
import { ArrowLongRightIcon } from '@heroicons/react/16/solid'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'

import { Link, usePage } from '@inertiajs/react'
import React from 'react'

const ServicesHome = () => {
    const { specialties } = usePage().props

    return (
        <div className='py-section bg-primary-50'>
            <div className='container'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8'>
                    <TitleSection bg='light' title="Una atención dental personalizada y cómoda" subTitle="LO QUE OFRECEMOS" />

                    {specialties.map((specialty, index) => (

                        <div className='border border-primary-700 flex flex-col rounded overflow-hidden '>
                            <div className='px-10 pt-10 pb-8 grow' >

                                <h3 className='text-primary-700 text-2xl font-semibold '>{specialty.name}</h3>
                                <div className=' opacity-65  mt-2 '>
                                    <p className='text-lg'>{specialty.entry}</p>
                                </div>
                            </div>
                            <Link className='bg-primary w-full px-8 py-3 text-white text-lg font-medium flex items-center group'>
                                Ver mas
                                <ArrowRightCircleIcon className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default ServicesHome
