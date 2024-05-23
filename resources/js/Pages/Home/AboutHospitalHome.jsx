import TitleSection from '@/Components/TitleSection'
import { CheckCircleIcon } from '@heroicons/react/16/solid'
import React from 'react'

const AboutHospitalHome = () => {
    return (
        <div className='py-section bg-primary-50'>
            <div className='container'>
                <div className='grid lg:grid-cols-12 gap-10 items-center'>
                    <div className='col-span-6'>
                        <img src="/img/hospital.jpg" alt="" className='max-w-md w-full mx-auto' />
                    </div>
                    <div className='col-span-6'>
                        <TitleSection subTitle='ACERCA DEl HOPSITAL'>
                            Nuestros mejores servicios y tratamiento popular Aquí.
                        </TitleSection>
                        <p className='mt-8 opacity-60 text-lg'>
                            Estamos orgullosos de ofrecer una amplia gama de los mejores servicios médicos y tratamientos populares para satisfacer sus diversas necesidades de atención médica.
                        </p>
                        <ol className='space-y-4 mt-6 font-medium'>
                            <li className='flex item-center'>
                                <CheckCircleIcon className='text-primary-400 w-5 h-5 mr-1 m-1' />
                                Soluciones de salud mental</li>
                            <li className='flex item-center'>
                                <CheckCircleIcon className='text-primary-400 w-5 h-5 mr-1 m-1' />
                                Mejora rápida del paciente</li>
                            <li className='flex item-center'>
                                <CheckCircleIcon className='text-primary-400 w-5 h-5 mr-1 m-1' />
                                Tratamiento de clase mundial</li>
                        </ol>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHospitalHome
