import LinkArrowIcon from '@/Components/LinkArrowIcon'
import { ArrowRightIcon } from '@heroicons/react/16/solid'
import { Link } from '@inertiajs/react'
import React from 'react'

const CardDoctorSpecialty = ({ doctor, specialtyTitle }) => {
    return (
        <div className='md:flex rounded-lg overflow-hidden text-lg max-w-md md:max-w-full mx-auto bg-white border'>
            <div className='md:w-5/12 lg:w-4/12  bg-cover md:bg-center n aspect-video md:aspect-auto
            ' style={{ backgroundImage: "url('" + doctor.thumb + "')" }}>
                {/* <img className='object-cover object-top h-96 w-full' src={doctor.thumb} alt="" /> */}
            </div>
            <div className='md:w-7/12 lg:w-8/12  px-8 pt-12 pb-8 flex flex-col '>
                <p className='uppercase tracking-widest text-lg '>
                    Especialista en <span className='text-primary'>{specialtyTitle}</span>
                </p>

                <h2 className='text-3xl md:text-3xl font-semibold mt-2 lg:mt-4 text-primary'>{doctor.name}</h2>

                <p className=' mt-2 lg:mt-4  opacity-85'>{doctor.entry}</p>
                <div className='flex items-end justify-between mt-6'>
                    <span className='font-light  inline-block opacity-85 '>
                        Trabajando desde {doctor.startYear}
                    </span>
                    <LinkArrowIcon path={route('doctor', doctor.slug)} >
                        Ver Medico
                    </LinkArrowIcon>

                </div>

            </div>
        </div>
    )
}

export default CardDoctorSpecialty
