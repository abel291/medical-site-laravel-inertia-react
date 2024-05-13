import TitleSection from '@/Components/TitleSection'
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import CardTestimonial from '@/Components/Cards/CardTestimonial'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import CarouselContainer from '@/Components/Carousel/CarouselContainer';
import "swiper/css/pagination";
const TestimonialHome = () => {
    const testimonials = [
        {
            name: 'Emily Davis',
            img: 'img',
            job: 'CEO of Digital Marketing',
            text: 'Highly doctors and compassionate skilled healthcare with a patient-centered healthcare patient-centered healthcare with a approach doctors and compassionate staff.'
        },
        {
            name: 'Emily Davis',
            img: 'img',
            job: 'CEO of Digital Marketing',
            text: 'Highly doctors and compassionate skilled healthcare with a patient-centered healthcare patient-centered healthcare with a approach doctors and compassionate staff.'
        },
        {
            name: 'Emily Davis',
            img: 'img',
            job: 'CEO of Digital Marketing',
            text: 'Highly doctors and compassionate skilled healthcare with a patient-centered healthcare patient-centered healthcare with a approach doctors and compassionate staff.'
        },
        {
            name: 'Emily Davis',
            img: 'img',
            job: 'CEO of Digital Marketing',
            text: 'Highly doctors and compassionate skilled healthcare with a patient-centered healthcare patient-centered healthcare with a approach doctors and compassionate staff.'
        },
        {
            name: 'Emily Davis',
            img: 'img',
            job: 'CEO of Digital Marketing',
            text: 'Highly doctors and compassionate skilled healthcare with a patient-centered healthcare patient-centered healthcare with a approach doctors and compassionate staff.'
        },
        {
            name: 'Emily Davis',
            img: 'img',
            job: 'CEO of Digital Marketing',
            text: 'Highly doctors and compassionate skilled healthcare with a patient-centered healthcare patient-centered healthcare with a approach doctors and compassionate staff.'
        },
    ]

    return (
        <div>
            <div className='relative  py-section'>
                <div className='container'>
                    <TitleSection bgIsWhite={false} className="text-white max-w-xl" title="Lo que dicen los pacientes sobre nosotros."
                        subTitle="Testimonial" />

                    <div className='mt-12'>
                        <div className='w-full'>
                            <CarouselContainer
                                slidesPerView={1.2}
                                spaceBetween={10}
                                centeredSlides={true}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Navigation, Pagination]}
                                // onSlideChange={() => console.log('slide change')}
                                // onSwiper={(swiper) => console.log(swiper)}

                                breakpoints={{
                                    768: {
                                        slidesPerView: 1.8,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 3.2,
                                        spaceBetween: 20,

                                    },
                                    1280: {
                                        slidesPerView: 3.2,
                                        spaceBetween: 25,
                                    },
                                    1536: {
                                        slidesPerView: 3.2,
                                        spaceBetween: 25,
                                    },

                                }}

                            >
                                {testimonials.map((testimonial, index) => (
                                    <SwiperSlide key={index} >
                                        <div className='mb-16'>
                                            <CardTestimonial testimonial={testimonial} />
                                        </div>
                                    </SwiperSlide>
                                ))}

                            </CarouselContainer>
                        </div>
                        {/* <div className='flex justify-between'>
                            <div className='flex gap-x-2 mt-4'>
                                <button className="button-prev bg-primary-600 rounded-full">
                                    <ChevronLeftIcon className='w-8 h-8 text-white' />
                                </button>
                                <button className="button-next bg-primary-600 rounded-full" >
                                    <ChevronRightIcon className='w-8 h-8 text-white' />
                                </button>
                            </div>
                            <div></div>
                        </div> */}
                    </div>
                </div>
                <div className='absolute inset-x-0 top-0 bottom-[40%] gradient-primary z-[-1]'></div>
            </div>

        </div>
    )
}

export default TestimonialHome
