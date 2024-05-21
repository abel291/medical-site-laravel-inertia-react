import CarouselContainer from '@/Components/Carousel/CarouselContainer'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import CardDoctorSpecialty from '../../Pages/Specialty/CardDoctorSpecialty'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/pagination';
const CarouselDoctors = ({ doctors, specialtyTitle }) => {
    return (
        doctors.length > 1 ? (
            <div className='relative'>
                <CarouselContainer loop={true}
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    pagination={true}
                    navigation={{
                        nextEl: ".button-next",
                        prevEl: ".button-prev",
                    }}>
                    {doctors.map((doctor) => (
                        <SwiperSlide className={" relative mb-10"} key={doctor.id} >
                            <CardDoctorSpecialty key={doctor.id} doctor={doctor} specialtyTitle={specialtyTitle} />
                        </SwiperSlide>
                    ))}

                </CarouselContainer>

                <div className='absolute inset-x-0 top-1/2 z-10  '>
                    <div className='flex justify-between -mx-2 sm:-mx-4 lg:-mx-12  '>
                        <button className="button-prev bg-primary rounded-full">
                            <ChevronLeftIcon className='w-8 h-8 text-white' />
                        </button>
                        <button className="button-next bg-primary rounded-full">
                            <ChevronRightIcon className='w-8 h-8 text-white' />
                        </button>
                    </div>
                </div>
            </div >
        ) : (
            <CardDoctorSpecialty key={doctors[0].id} doctor={doctors[0]} specialtyTitle={specialtyTitle} />
        )
    )
}

export default CarouselDoctors
