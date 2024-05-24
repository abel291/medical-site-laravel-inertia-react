import CarouselDoctors from '@/Components/Carousel/CarouselDoctors'
import TitleSection from '@/Components/TitleSection'
import React from 'react'

const CarouselDoctorsSection = ({ doctors, specialtyTitle }) => {
    return (
        <div className='container'>
            <TitleSection className='text-center' title="Conozca a nuestros médicos." subTitle="NUESTROS MEJORES MÉDICOS" />
            <div className='mt-title-section'>
                <CarouselDoctors doctors={doctors} specialtyTitle={specialtyTitle} />
            </div>
        </div>
    )
}

export default CarouselDoctorsSection
