import TitleSection from '@/Components/TitleSection'
import { BuildingLibraryIcon, ClipboardDocumentCheckIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
const services = [
    {
        Icon: BuildingLibraryIcon,
        title: 'Laboratorio moderno',
        entry: 'Nuestro laboratorio está equipado con los últimos equipos de diagnóstico y sistemas de automatización, lo que garantiza una precisión.'
    },
    {
        Icon: ClipboardDocumentCheckIcon,
        title: 'Centro de Diagnóstico',
        entry: 'Estamos comprometidos a brindar servicios de laboratorio excepcionales y apoyar a los proveedores de atención médica.'
    },
    {
        Icon: UserCircleIcon,
        title: 'Médicos experimentados',
        entry: 'Estamos orgullosos de nuestro equipo de médicos experimentados que están a la vanguardia para brindar servicios excepcionales.'
    }
]
const Section3AboutUs = () => {
    return (
        <div className='container py-section'>
            <TitleSection subTitle='SERVICIOS PRINCIPALES' >
                Somos una progresista Clinica medica.
            </TitleSection>
            <div className='mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
                    {services.map((item) => (
                        <div className='bg-primary-700/10 p-7 group  hover:bg-primary-700/70 transition-colors duration-500 '>
                            <item.Icon className="w-12 h-12 text-primary group-hover:text-white" />
                            <h3 className='text-2xl font-semibold mt-4 group-hover:text-white'>{item.title}</h3>
                            <p className='text-gray-500   mt-2 text-lg group-hover:text-white'>{item.entry}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Section3AboutUs
