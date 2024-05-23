import CarouselDoctors from '@/Components/Carousel/CarouselDoctors'
import TitleSection from '@/Components/TitleSection'
import React from 'react'

const CarouselDoctorsSurgerySection = ({ surgery }) => {
    return (
        <div className='py-section bg-gray-100' id='doctorSection'>
            <div className='container'>
                <TitleSection className='text-center' title="Conozca a nuestros médicos." subTitle="NUESTRO MEJOR MÉDICO" />
                <div className='mt-title-section'>
                    <CarouselDoctors doctors={surgery.doctors} specialtyTitle={surgery.name} />
                </div>
            </div>
        </div>
    )
}

export default CarouselDoctorsSurgerySection
