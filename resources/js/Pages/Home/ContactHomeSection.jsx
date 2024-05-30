import { CalendarIcon, HeartIcon } from "@heroicons/react/16/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import React from "react";

const ContactHomeSection = () => {
    return (
        <div className="py-section bg-primary-50">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className=" flex flex-col">
                        <div className="flex grow items-center justify-center bg-primary-500 px-8 py-8 text-4xl font-semibold text-white lg:py-0">
                            <h2>
                                No <strong>dude</strong> en contactarnos
                            </h2>
                        </div>
                        <Link
                            href={route("contact")}
                            className="flex items-center justify-center bg-gray-800 p-5 text-center text-xl font-semibold text-white transition-colors duration-300 hover:bg-primary-700"
                        >
                            <CalendarDaysIcon className="mr-2 h-6 w-6" />
                            Hacer una cita
                        </Link>
                    </div>
                    <div
                        className="relative bg-primary-800 p-8 text-white before:absolute before:inset-y-[10%] before:right-0
                    before:h-4/5 before:w-[1px] lg:p-10 lg:before:bg-white/50 lg:before:content-['']  "
                    >
                        <img
                            src="/img/icons/ambulance.svg"
                            className="mb-7 w-12"
                            alt=""
                        />
                        <h3 className="text-2xl font-semibold ">
                            Necesita salud familiar
                        </h3>
                        <p className="mt-3 text-lg opacity-60">
                            Entendemos la importancia de la salud familiar y el
                            bienestar general.
                        </p>
                    </div>
                    <div className="bg-primary-800 p-8 text-white lg:p-10">
                        <img
                            src="/img/icons/stethoscope.svg"
                            className="mb-7 w-12"
                            alt=""
                        />
                        <h3 className="text-2xl font-semibold ">
                            Servicio 24 Horas
                        </h3>
                        <p className="mt-3 text-lg opacity-60">
                            Estamos orgullosos de ofrecer servicios médicos las
                            24 horas para garantizar que usted.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactHomeSection;
