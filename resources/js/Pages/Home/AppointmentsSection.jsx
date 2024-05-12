import PrimaryButton from '@/Components/PrimaryButton'
import { CalendarDaysIcon } from '@heroicons/react/16/solid'
import React from 'react'


const AppointmentsSection = () => {
    return (
        <div className='bg-primary-900'>
            <div className='container py-14 text-white'>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className=' flex items-center'>

                            <h3 className='text-4xl font-medium text-white '>Abierto para citas</h3>

                        </div>

                        <p className='text-lg mt-2 max-w-3xl'>Estamos encantados de anunciar que nuestras puertas están abiertas y ahora aceptamos citas para brindarle un mejor servicio.</p>
                    </div>


                    <div>
                        <button className='btn-orange'>
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
