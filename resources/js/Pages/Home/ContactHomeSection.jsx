import { CalendarIcon, HeartIcon } from '@heroicons/react/16/solid'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import { Link } from '@inertiajs/react'
import React from 'react'

const ContactHomeSection = () => {
    return (
        <div className='py-section bg-primary-50'>
            <div className='container'>

                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    <div className=' flex flex-col'>
                        <div className='px-8 py-8 lg:py-0 grow bg-primary-500 text-white flex items-center justify-center text-4xl font-semibold'>
                            <h2>No <strong>dude</strong> en contactarnos</h2>
                        </div>
                        <Link className="p-5 text-center font-semibold text-xl bg-gray-800 text-white hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center">
                            <CalendarDaysIcon className='w-6 h-6 mr-2' />
                            Hacer una cita

                        </Link>
                    </div>
                    <div className="p-8 lg:p-10 bg-primary-800 text-white relative lg:before:content-[''] before:absolute
                    before:w-[1px] before:h-4/5 lg:before:bg-white/50 before:right-0 before:inset-y-[10%]  ">
                        <img src="/img/icons/ambulance.svg" className='w-12 mb-7' alt="" />
                        <h3 className='text-2xl font-semibold '>
                            Necesita salud familiar
                        </h3>
                        <p className='text-lg opacity-60 mt-3'>
                            Entendemos la importancia de la salud familiar y el bienestar general.
                        </p>
                    </div>
                    <div className='p-8 lg:p-10 bg-primary-800 text-white'>
                        <img src="/img/icons/stethoscope.svg" className='w-12 mb-7' alt="" />
                        <h3 className='text-2xl font-semibold '>
                            Servicio 24 Horas
                        </h3>
                        <p className='text-lg opacity-60 mt-3'>
                            Estamos orgullosos de ofrecer servicios médicos las 24 horas para garantizar que usted.
                        </p>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default ContactHomeSection



