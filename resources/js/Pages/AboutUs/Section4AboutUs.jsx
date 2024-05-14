import TitleSection from '@/Components/TitleSection'
import { CheckCircleIcon } from '@heroicons/react/16/solid'
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'
import React from 'react'
const aspects = [
    {
        title: 'Información del paciente',
        entry: 'Por la presente doy mi consentimiento a y a sus profesionales de la salud para proporcionar tratamiento médico.',
    },
    {
        title: 'Contacto de emergencia',
        entry: 'Este formulario de solicitud es sólo para fines informativos y no garantiza.',
    },
    {
        title: 'Historial médico',
        entry: 'Nuestro historial médico es una pieza de información vital que brinda atención médica.',
    },
]
const Section4AboutUs = () => {
    return (
        <div className='container pb-section'>
            <TitleSection subTitle='CUIDANDO LA SALUD DE TI Y DE TU FAMILIA.' >
                Proporcionamos todos los aspectos de
                Prácticas médica para
                ¡Toda la familia!
            </TitleSection>
            <div className='mt-16'>
                <div className='flex flex-col lg:flex-row lg:items-center gap-10 '>
                    <div className='lg:w-5/12'>
                        <h2 className='font-semibold text-2xl'>Bienvenido a medipro, donde ofrecemos atención médica integral adaptada a cada miembro de su familia.</h2>
                        <p className='mt-8 text-gray-500 font-light text-lg'>Nuestro dedicado equipo de profesionales de la salud está comprometido a brindarle a usted y a sus seres queridos servicios de atención médica personalizados y compasivos. Entendemos la importancia de la salud familiar.</p>
                        <ol className='mt-8 text-lg font-medium text-primary space-y-4'>
                            <li className='flex items-center'>
                                <CheckCircleIcon className='w-5 h-5 mr-1.5' />
                                Atención centrada en la familia

                            </li>
                            <li className='flex items-center'>
                                <CheckCircleIcon className='w-5 h-5 mr-1.5' />
                                Servicios Preventivos

                            </li>
                            <li className='flex items-center'>
                                <CheckCircleIcon className='w-5 h-5 mr-1.5' />
                                Vacunas e inmunizaciones

                            </li>
                        </ol>
                    </div>
                    <div className='lg:w-7/12 space-y-5'>
                        {aspects.map((item) => (
                            <div className='p-7 bg-primary-700/10 flex '>
                                <div>
                                    <ClipboardDocumentCheckIcon className='w-12 h-12 mr-3' />
                                </div>
                                <div>
                                    <h3 className='text-xl lg:text-2xl font-semibold  group-hover:text-white'>{item.title}</h3>
                                    <p className='text-gray-500  mt-2 lg:text-lg group-hover:text-white'>{item.entry}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4AboutUs
