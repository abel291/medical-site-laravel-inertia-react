import TitleSection from '@/Components/TitleSection'
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import CardTestimonial from '@/Components/Cards/CardTestimonial'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import CarouselContainer from '@/Components/Carousel/CarouselContainer';
import "swiper/css/pagination";
const TestimonialHome = () => {

    const testimonials = [{
        name: "Sra. Luisa Terrazas Tercero",
        job: "CEO of Digital Marketing",
        text: "Sed vero maxime maxime sint dicta aspernatur et voluptatum debitis qui consequatur ut et aut."
    },
    {
        name: "Lic. Leo Sanabria Tercero",
        job: "Stundet",
        text: "Sed architecto voluptatibus illum ullam laudantium sed et molestiae maxime voluptas numquam qui necessitatibus et."
    },
    {
        name: "Dr. Mireia Feliciano",
        job: "Accountant",
        text: "Enim praesentium asperiores harum ut esse id atque sit illo magnam nihil velit tenetur occaecati."
    },
    {
        name: "Carlota Medrano Tercero",
        job: "Engineer",
        text: "Totam alias voluptate rerum est et suscipit et quod similique non voluptas non esse velit."
    },
    {
        name: "Noa Más Hijo",
        job: "Doctor",
        text: "Dolorum ipsam ipsam eos neque qui voluptate et consequuntur quos ratione debitis in voluptas inventore."
    },
    {
        name: "Miguel Ángel Soriano",
        job: "Construction",
        text: "Aliquid atque provident similique et architecto qui nostrum voluptatum qui rerum consequuntur adipisci sapiente mollitia."
    }
    ]

    return (
        <div>
            <div className='relative  pt-section bg-primary-100 z-10'>
                <div className='container'>
                    <TitleSection bg="primary" className="text-white max-w-xl" title="Lo que dicen los pacientes sobre nosotros."
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
                                        slidesPerView: 3.3,
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
