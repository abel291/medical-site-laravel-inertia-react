import TitleSection from '@/Components/TitleSection'
import React from 'react'

const ImageInfrastructureSection = () => {
    return (
        <div className='pt-section'>
            <div className='container'>
                <div className='flex flex-col lg:flex-row items-center gap-8'>
                    <div className='lg:w-1/2'>
                        <TitleSection title='Nuestra infraestructura y cultura' subTitle='NUESTRA CULTURA' />
                    </div>
                    <div className='lg:w-1/2'>
                        <p className='text-gray-500 font-light text-lg'>En nuestro hosptal, nos enorgullecemos de fomentar una cultura de atención, donde el bienestar de
                            cada individuo es nuestra máxima prioridad. Nuestro compromiso con la excelencia en la atención
                            sanitaria está fundamentado.
                        </p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-5 mt-title-section'>
                <Image img="/img/specialties/specialty-1.jpg" />
                <Image img="/img/specialties/specialty-1.jpg" />
                <Image img="/img/specialties/specialty-1.jpg" />
                <Image img="/img/specialties/specialty-1.jpg" />
                <Image img="/img/specialties/specialty-1.jpg" />
                <Image img="/img/specialties/specialty-1.jpg" />
                <Image img="/img/specialties/specialty-1.jpg" />
                <Image img="/img/specialties/specialty-1.jpg" />
                <Image img="/img/specialties/specialty-1.jpg" />
                <Image img="/img/specialties/specialty-1.jpg" />


            </div>
        </div>
    )
}
const Image = ({ img }) => {
    return (
        <div className='overflow-hidden'>
            <img className='transform transition-transform duration-300 ease-out hover:scale-110' src={img} alt="" />
        </div>
    )
}

export default ImageInfrastructureSection
