import CarouselContainer from '@/Components/Carousel/CarouselContainer'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'


import { Link } from '@inertiajs/react'
import { Navigation } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'

const pagesBanner = [
    {
        title: 'Nuestros mejores servicios y Tratamiento Popular Aquí.',
        subTitle: 'CUIDAMOS DE TU SALUD',
        desc: 'Ofrecemos los tratamientos más novedosos e innovadores del mercado, cirugías mínimamente invasivas, procedimientos con láser y equipamiento tecnológico de última generación, diagnósticos a través de estudios del ADN y las más avanzadas técnicas quirúrgicas.',
        img: '/img/home/banner-1.jpg',
        path: route('home'),
        pathTitle: 'Conocenos'
    },
    {
        title: 'Estamos proporcionandoMejor y asequible Cuidado de la salud.',
        subTitle: 'CÓMO TRABAJAMOS',
        desc: 'Una atención personalizada, clínicas con tecnología de vanguardia, profesionales médicos de renombre, un placentero viaje y un bajo costo hacen de Sublimis su mejor opción en el momento de elegir dónde y con quién operarse.',
        img: '/img/home/banner-2.jpg',
        path: route('home'),
        pathTitle: 'Contactanos'
    },
    {
        title: 'Un comprensivo Directorio para su Cuidado de la salud.',
        subTitle: 'SERVICIO SUPERIOR',
        desc: 'Ofrecemos los tratamientos más novedosos e innovadores del mercado, cirugías mínimamente invasivas, procedimientos con láser y equipamiento tecnológico de última generación, diagnósticos a través de estudios del ADN y las más avanzadas técnicas quirúrgicas.',
        img: '/img/home/banner-3.jpg',
        path: route('home'),
        pathTitle: 'Mira nuestros precios'
    }
]
import 'swiper/css/navigation';
const BannerHome = ({ title, breadcrumb = [] }) => {


    return (

        <div className='relative'>
            <CarouselContainer loop={true}
                modules={[Navigation]}
                navigation={{
                    nextEl: ".button-next",
                    prevEl: ".button-prev",
                }}>
                {pagesBanner.map((data, index) => (
                    <SwiperSlide className={" relative "} key={index} >
                        < div className='container pt-16 pb-12 lg:pt-28 lg:pb-20  ' >
                            <div className='lg:relative px-8 lg:px-0'>
                                <div className='lg:flex items-center   lg:min-h-[500px] '>
                                    <div className='space-y-6  z-10'>

                                        <div>
                                            <span className='uppercase  tracking-widest text-sm sm:text-base font-bold text-orange-300'>
                                                {data.subTitle}
                                            </span>
                                            <h1 className='text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold lg:w-8/12  '>{data.title}</h1>
                                        </div>
                                        <p className=' text-lg lg:text-neutral-600 font-light lg:w-6/12'>
                                            {data.desc}
                                        </p>
                                        {data.path && (
                                            <div className=''>
                                                <Link className='btn btn-primary' href={data.path}>{data.pathTitle}</Link>
                                            </div>
                                        )}
                                    </div>
                                    <div className=' lg:w-6/12 absolute inset-0 lg:right-0 lg:inset-x-auto z-[-1] blur-sm  lg:blur-none opacity-80 sm:opacity-100'>
                                        <img src={data.img} alt="" className='w-full max-w-full h-full object-cover lg:rounded-lg max-h-full ' />
                                    </div>
                                    <div className='absolute lg:hidden inset-0 bg-white/25 z-[-1]'></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
                }

            </CarouselContainer>

            <div className='absolute inset-x-0 top-1/2 z-10  '>
                <div className='flex justify-between container px-4 lg:px-2 xl:px-0'>
                    <button className="button-prev bg-primary rounded-full">
                        <ChevronLeftIcon className='w-6 h-6 text-white' />
                    </button>
                    <button className="button-next bg-primary rounded-full">
                        <ChevronRightIcon className='w-6 h-6 text-white' />
                    </button>
                </div>
            </div>
        </div >
    )
}

export default BannerHome
{/*<div className='flex font-medium  '>
                     <ol className='mt-2  flex gap-x-1 '>
                        <li className='flex items-center'>
                            <a href={route('home')}>Inicio</a>
                            <ChevronDoubleRightIcon className='ml-1 w-5 h-5  text-secondary-500' />
                        </li>
                        <li className='flex items-center'>
                            <a href="">Acerca de</a>
                        </li>
                    </ol>
                </div>*/}
