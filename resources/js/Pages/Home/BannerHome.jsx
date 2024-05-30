import CarouselContainer from "@/Components/Carousel/CarouselContainer";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

import { Link } from "@inertiajs/react";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";

const pagesBanner = [
    {
        title: "Nuestros mejores servicios y tratamiento populares aquí.",
        subTitle: "CUIDAMOS DE TU SALUD",
        desc: "Ofrecemos los tratamientos más novedosos e innovadores del mercado, cirugías mínimamente invasivas, procedimientos con láser y equipamiento tecnológico de última generación, diagnósticos a través de estudios del ADN y las más avanzadas técnicas quirúrgicas.",
        img: "/img/home/banner-1.jpg",
        path: route("about"),
        pathTitle: "Conocenos",
    },
    {
        title: "Estamos proporcionando lo mas asequible para el cuidado de la salud.",
        subTitle: "CÓMO TRABAJAMOS",
        desc: "Una atención personalizada, clínicas con tecnología de vanguardia, profesionales médicos de renombre, un placentero viaje y un bajo costo hacen de Sublimis su mejor opción en el momento de elegir dónde y con quién operarse.",
        img: "/img/home/banner-2.jpg",
        path: route("home"),
        pathTitle: "Contactanos",
    },
    {
        title: "Un comprensivo directorio para su el cuidado de la salud.",
        subTitle: "SERVICIO SUPERIOR",
        desc: "Ofrecemos los tratamientos más novedosos e innovadores del mercado, cirugías mínimamente invasivas, procedimientos con láser y equipamiento tecnológico de última generación, diagnósticos a través de estudios del ADN y las más avanzadas técnicas quirúrgicas.",
        img: "/img/home/banner-3.jpg",
        path: route("contact"),
        pathTitle: "Mira nuestros precios",
    },
];
import "swiper/css/navigation";
const BannerHome = ({ title, breadcrumb = [] }) => {
    return (
        <div className="relative">
            <CarouselContainer
                loop={true}
                modules={[Navigation]}
                navigation={{
                    nextEl: ".button-next",
                    prevEl: ".button-prev",
                }}
            >
                {pagesBanner.map((data, index) => (
                    <SwiperSlide className={" relative "} key={index}>
                        <div className="container pb-12 pt-16 lg:pb-24 lg:pt-28  ">
                            <div className="px-8 lg:relative lg:px-0">
                                <div className="items-center lg:flex   lg:min-h-[500px] ">
                                    <div className="z-10  space-y-6">
                                        <div>
                                            <span className="text-primary  mb-4 text-lg  uppercase tracking-widest">
                                                {data.subTitle}
                                            </span>
                                            <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl lg:w-8/12 lg:text-6xl xl:text-7xl  ">
                                                {data.title}
                                            </h1>
                                        </div>
                                        <p className=" text-lg font-light lg:w-6/12 lg:text-neutral-600">
                                            {data.desc}
                                        </p>
                                        {data.path && (
                                            <div className="">
                                                <Link
                                                    className="btn btn-primary"
                                                    href={data.path}
                                                >
                                                    {data.pathTitle}
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                    <div className=" absolute inset-0 z-[-1] opacity-80 blur-sm sm:opacity-100 lg:inset-x-auto  lg:right-0 lg:w-6/12 lg:blur-none">
                                        <img
                                            src={data.img}
                                            alt=""
                                            className="h-full max-h-full w-full max-w-full object-cover lg:rounded-lg "
                                        />
                                    </div>
                                    <div className="absolute inset-0 z-[-1] bg-white/25 lg:hidden"></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </CarouselContainer>

            <div className="absolute inset-x-0 top-1/2 z-10  ">
                <div className="container flex justify-between px-4 lg:px-2 xl:px-0">
                    <button className="button-prev bg-primary rounded-full">
                        <ChevronLeftIcon className="h-6 w-6 text-white" />
                    </button>
                    <button className="button-next bg-primary rounded-full">
                        <ChevronRightIcon className="h-6 w-6 text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BannerHome;
