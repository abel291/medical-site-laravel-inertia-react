import React from "react";

const CardTestimonial = ({ testimonial }) => {
    return (
        <div className="rounded-lg border bg-white p-10">
            <div className="flex items-center gap-3">
                <img
                    className="h-14 w-14 rounded-full object-cover object-center"
                    src={testimonial.img}
                    alt=""
                />
                <div>
                    <h3 className="text-xl font-semibold">
                        {testimonial.name}
                    </h3>
                    <span className="mt-4 text-lg text-gray-500">
                        {testimonial.job}
                    </span>
                </div>
            </div>
            <p className="mt-6 text-lg text-gray-500">{testimonial.text}</p>
        </div>
    );
};

export default CardTestimonial;
