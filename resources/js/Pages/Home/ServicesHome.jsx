import Card from "@/Components/Cards/Card";
import TitleSection from "@/Components/TitleSection";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

import { Link, usePage } from "@inertiajs/react";
import React from "react";

const ServicesHome = () => {
    const { specialties } = usePage().props;

    return (
        <div className="py-section bg-primary-50">
            <div className="container">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
                    <TitleSection
                        bg="light"
                        title="Una atención dental personalizada y cómoda"
                        subTitle="LO QUE OFRECEMOS"
                    />

                    {specialties.map((specialty, index) => (
                        <div
                            key={specialty.id}
                            className="flex flex-col overflow-hidden rounded border border-primary-700 "
                        >
                            <div className="grow px-10 pb-8 pt-10">
                                <h3 className="text-2xl font-semibold text-primary-700 ">
                                    {specialty.name}
                                </h3>
                                <div className=" mt-2  opacity-65 ">
                                    <p className="text-lg">{specialty.entry}</p>
                                </div>
                            </div>
                            <Link className="bg-primary group flex w-full items-center px-8 py-3 text-lg font-medium text-white">
                                Ver mas
                                <ArrowRightCircleIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesHome;
