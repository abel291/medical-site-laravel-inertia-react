import React from 'react'


import "swiper/css";

import { Swiper } from 'swiper/react';

const CarouselContainer = ({ children, ...props }) => {
    return (

        <div className='w-full'>
            <Swiper
                {...props}
                effect={'fade'}
                style={{
                    "--swiper-pagination-color": "#6b7280",
                    // "--swiper-pagination-bullet-inactive-color": "#999999",
                    // "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "12px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px"
                }}
            >
                {children}

            </Swiper>
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


    )
}

export default CarouselContainer
