import {
    ArrowRightIcon,
    CheckCircleIcon,
    MinusIcon,
} from "@heroicons/react/16/solid";
import { Link } from "@inertiajs/react";
import React from "react";
import LinkArrowIcon from "@/Components/LinkArrowIcon";

const CardSpecialty = ({ specialty }) => {
    return (
        <div className="flex flex-col overflow-hidden rounded-xl  border bg-white">
            <img
                src={specialty.thumb}
                className="aspect-video object-cover object-center"
                alt=""
            />

            <div className="flex h-full flex-col px-8 pb-6 pt-6  ">
                <Link
                    href={route("specialty", specialty.slug)}
                    className="flex items-center"
                >
                    <h3 className="text-lg font-semibold text-primary-600">
                        {specialty.name}
                    </h3>
                </Link>
                <p className="mt-2  opacity-60">{specialty.entry}</p>
                <ol className="mt-2 opacity-80">
                    {specialty.surgeries.map((surgery) => (
                        <li key={surgery.id}>
                            <Link
                                href={route("surgery", surgery.slug)}
                                className="flex text-primary-700 transition-transform hover:translate-x-1"
                            >
                                <MinusIcon className="mr-2 w-4" />
                                {surgery.name}
                            </Link>
                        </li>
                    ))}
                </ol>
                <div className="mt-6 flex  grow flex-col items-end justify-end">
                    <div className=" text-base">
                        <LinkArrowIcon
                            path={route("specialty", specialty.slug)}
                        >
                            Mas detalles
                        </LinkArrowIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSpecialty;
