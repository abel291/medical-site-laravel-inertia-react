import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from '@/Components/SecondaryButton'
import TitleSection from '@/Components/TitleSection'
import { PlayCircleIcon, PlayIcon } from '@heroicons/react/16/solid'
import FsLightbox from 'fslightbox-react'
import React, { useState } from 'react'

const Section2AboutUs = () => {
    return (
        <div className='gradient-primary'>
            <div className='container py-section '>
                <div className='lg:flex items-center lg:gap-x-10 xl:gap-x-16'>
                    <div className='lg:w-6/12'>
                        <img className='w-full object-cover object-center rounded' src="/img/about-us/about-3.jpg" alt="" />
                    </div>
                    <div className='lg:w-5/12 mt-10 lg:mt-0'>
                        <TitleSection bgIsWhite={false} className="text-white" subTitle='QUIENES SOMOS' >
                            Mejorando la calidad de<br />
                            Tu vida mejor<br />
                            Salud.
                        </TitleSection>
                        <p className='text-white/80  mt-6  lg:text-lg '>
                            Ofrecemos una amplia gama de servicios integrales de atención médica para abordar todos
                            los aspectos de su salud. Desde atención preventiva y exámenes de salud hasta tratamientos
                            especializados y manejo de enfermedades crónicas.
                        </p>

                        <div className='mt-6'>
                            <ButtonVideo />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

const ButtonVideo = () => {
    const [toggler, setToggler] = useState(false);

    return (
        <>
            <button className='flex items-center font-semibold  text-white text-lg hover:text-orange-300 transition-colors' onClick={() => setToggler(!toggler)}>
                <PlayCircleIcon className='h-6 w-6 mr-2' />
                <span className=''>Ver video</span>
            </button>
            <FsLightbox
                toggler={toggler}
                sources={[
                    <iframe
                        src="https://www.youtube.com/embed/pJwjgXcJ4zQ"
                        width="800px"
                        height="500px"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />,
                ]}
            />
        </>
    );
}

export default Section2AboutUs
// QUIENES SOMOS
// Mejorando la calidad de
// Tu vida mejor
// Salud.
// Ofrecemos una amplia gama de servicios integrales de atención médica para abordar todos los aspectos de su salud. Desde atención preventiva y exámenes de salud hasta tratamientos especializados y manejo de enfermedades crónicas.
