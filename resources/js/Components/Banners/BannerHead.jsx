import {
    ArrowRightEndOnRectangleIcon,
    ChevronDoubleRightIcon,
} from "@heroicons/react/16/solid";
import { Link } from "@inertiajs/react";
import React from "react";

const BannerHead = ({ title = "Inicio", breadcrumb = [], date = "" }) => {
    return (
        <div className="gradient-primary pb-16 pt-20 text-center md:pt-24 lg:pb-24 lg:pt-32 lg:text-left">
            <div className="container">
                {date && (
                    <p className="font-light text-white/70  ">
                        Actualizado {date}
                    </p>
                )}
                <h1 className=" mt-1 text-4xl font-semibold text-white md:text-4xl lg:mt-2 lg:text-5xl xl:text-6xl">
                    {title}
                </h1>
                <ol className="mt-1 inline-flex items-center gap-x-1  text-white lg:mt-3">
                    <li>
                        <Link href={route("home")}>Inicio</Link>
                    </li>
                    {breadcrumb.map((item, index) => (
                        <li key={index} className="flex items-center gap-x-1">
                            <ChevronDoubleRightIcon className="h-5 w-5 text-orange-300" />
                            {item.path ? (
                                <Link href={item.path}>{item.title}</Link>
                            ) : (
                                <span>{item.title}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default BannerHead;
