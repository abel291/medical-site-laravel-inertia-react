import PrimaryButton from '@/Components/PrimaryButton'
import { CalendarDaysIcon } from '@heroicons/react/16/solid'
import React from 'react'


const AppointmentsSection = () => {
    return (
        <div className='bg-primary-900'>
            <div className='container py-20 text-white'>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className=' flex items-center'>
                            <CalendarDaysIcon className='w-14 h-14 text-white' />
                            <h3 className='title-section text-white ml-4 '>Abierto para citas</h3>

                        </div>

                        <p className='text-lg mt-2 max-w-4xl'>Estamos encantados de anunciar que nuestras puertas están abiertas y ahora aceptamos citas para brindarle un mejor servicio.</p>
                    </div>


                    <div>
                        <PrimaryButton className='bg-secondary-600'>Crear Cita</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppointmentsSection
