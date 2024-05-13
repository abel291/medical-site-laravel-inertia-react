import React from 'react'

const CardTestimonial = ({ testimonial }) => {
    return (
        <div className='bg-white rounded-lg p-10 border'>
            <div className='flex gap-3 items-center'>
                <img className='w-14 h-14 object-cover object-center rounded-full' src="/img/doctors/doctor-1.jpg" alt="" />
                <div>
                    <h3 className='font-semibold text-xl'>{testimonial.name}</h3>
                    <span className='text-gray-500 mt-4 text-lg'>{testimonial.job}</span>
                </div>
            </div>
            <p className='text-gray-500 text-lg mt-6'>{testimonial.text}</p>
        </div>
    )
}

export default CardTestimonial
