import { ArrowRightIcon } from '@heroicons/react/16/solid'
import { Link } from '@inertiajs/react'
import React from 'react'

const CardDoctorSpecialty = ({ doctor, specialtyTitle }) => {
    return (
        <div className='md:flex rounded-lg overflow-hidden text-lg max-w-md md:max-w-full mx-auto bg-white'>
            <div className='md:w-5/12 lg:w-4/12'>
                <img className='object-cover object-center h-full' src={doctor.thumb} alt="" />
            </div>
            <div className='md:w-7/12 lg:w-8/12  px-8 pt-12 pb-8 flex flex-col'>
                <p className='uppercase tracking-widest text-lg '>
                    Especialista en <span className='text-primary'>{specialtyTitle}</span>
                </p>

                <h2 className='text-3xl md:text-3xl font-semibold mt-2 lg:mt-4 text-primary'>{doctor.name}</h2>

                <p className=' mt-2 lg:mt-4  opacity-85'>{doctor.entry}</p>
                <div className='flex items-end justify-between mt-6'>
                    <span className='font-light  inline-block opacity-85 '>
                        Trabajando desde {doctor.startYear}
                    </span>
                    <Link href={route('doctor', doctor.slug)} className='text-base text-primary-700 group'>
                        <div className='flex items-center font-medium'>
                            Ver Medico
                            <ArrowRightIcon className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
                        </div>

                    </Link>
                </div>

            </div>
        </div>
    )
}

export default CardDoctorSpecialty
