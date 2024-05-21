import TitleSection from '@/Components/TitleSection'
import React from 'react'

const Section1AboutUs = ({ doctor }) => {
    return (
        <div className='py-section container'>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
                <div className='lg:col-span-6 xl:col-span-7 xl:mb-10'>
                    <TitleSection
                        title='Cuidando la salud y el bienestarSer De Familia.'
                        subTitle='SOBRE NOSOTROS'
                    />
                    <p className='font-light mt-6 md:mt-8 text-gray-500 lg:text-lg'>
                        Nuestro enfoque de atención médica centrado en la familia garantiza que cada miembro de su familia reciba atención personalizada y atención adaptada a sus necesidades únicas. Creemos en construir relaciones sólidas con nuestros pacientes, fomentando la confianza.
                    </p>
                    <div className='mt-8'>
                        <div className='flex  gap-6'>
                            <img className='w-28  lg:w-32 object-cover object-center rounded-sm' src={doctor.thumb} alt="" />
                            <div>
                                <h3 className='text-2xl font-semibold'>{doctor.name}</h3>
                                <p className='text-orange-300  font-medium'>{doctor.specialty.name}</p>
                                <div className='border-t mt-3 mb-1'></div>
                                <p className='font-light lg:text-lg'>{doctor.entry}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-6 xl:col-span-5'>
                    <div className='flex   h-full items-stretch justify-around gap-x-5'>
                        <div className='w-6/12 '>
                            <img className='rounded-lg hover:scale-110 transition-transform duration-500 transform' src="/img/about-us/about-1.jpg" alt="" />
                        </div>
                        <div className='w-6/12 self-end '>
                            <img className='rounded-lg hover:scale-110 transition-transform duration-500 transform' src="/img/about-us/about-2.jpg" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1AboutUs
