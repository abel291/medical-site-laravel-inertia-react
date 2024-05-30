import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import React from "react";
import LinkArrowIcon from "../LinkArrowIcon";

const CardPost = ({ post }) => {
    return (
        <div className="flex max-w-md flex-col overflow-hidden  ">
            <img
                src={post.thumb}
                className="aspect-video w-full transform rounded-lg object-cover "
                alt=""
            />
            <div className="flex grow flex-col  justify-between  pb-4  pt-5">
                <div>
                    <span className="mb-2 block text-base opacity-65">
                        {post.updateDate}
                    </span>
                    <Link
                        href={route("post", post.slug)}
                        className="group flex items-center text-primary-700"
                    >
                        <h3 className="text-xl font-semibold text-primary-700 lg:text-2xl">
                            {post.title}
                        </h3>
                        <ArrowLongRightIcon className="ml-2 h-6 w-7 transition-transform ease-in-out group-hover:translate-x-4" />
                    </Link>

                    <div className="mt-4 opacity-65 ">
                        <p className="">{post.entry}</p>
                    </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                    <LinkArrowIcon path={route("post", post.slug)}>
                        Ver mas
                    </LinkArrowIcon>
                </div>
            </div>
        </div>
    );
};

export default CardPost;
