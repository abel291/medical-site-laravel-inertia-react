import PrimaryButton from '@/Components/PrimaryButton'
import { CalendarDaysIcon } from '@heroicons/react/16/solid'
import React from 'react'


const AppointmentsSection = () => {
    return (
        <div className='gradient-primary'>
            <div className='container py-14 text-white'>
                <div className='lg:flex justify-between items-center text-center lg:text-left'>
                    <div>
                        <h3 className='text-4xl font-semibold text-white'>Abierto para citas</h3>

                        <p className='text-lg mt-2 max-w-3xl'>
                            Estamos encantados de anunciar que nuestras puertas están abiertas y ahora aceptamos citas para brindarle un mejor servicio.
                        </p>
                    </div>

                    <div className='mt-6 lg:mt-0'>
                        <button className='btn-orange text-xl'>
                            <CalendarDaysIcon className=' mr-1 w-6 h-6' />
                            <span>Hacer consulta</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppointmentsSection
