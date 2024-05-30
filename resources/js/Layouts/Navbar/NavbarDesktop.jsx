import React, { Component } from "react";
import { BuildingOffice2Icon } from "@heroicons/react/16/solid";
import { Link, usePage } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import ApplicationLogo from "@/Components/ApplicationLogo";
import ButtonReserve from "./ButtonReserve";
import ProfileDropdown from "./ProfileDropdown";
import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    WhatsappIcon,
} from "@/Components/IconsSocialMedia";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

const NavbarDesktop = ({ navigations }) => {
    const { auth } = usePage().props;
    return (
        <nav className="hidden lg:block">
            <div className="bg-primary-800  text-base text-white">
                <div className="container flex h-12 items-center">
                    <div className="flex items-center border-r border-white/15 pr-3">
                        <MapPinIcon className="mr-1 h-5 w-5  text-white/60" />
                        86574 Jones Isle North Aryanna, IN 51541-9327
                    </div>
                    <div className="flex grow items-center justify-between pl-3 pr-4">
                        <div className="flex items-center">
                            <EnvelopeIcon className="mr-1 h-5 w-5  text-white/60" />
                            medical@medical.com
                        </div>
                        <div className="flex items-center gap-x-3">
                            <a target="blank" href="">
                                <FacebookIcon className="h-4 w-4 transition hover:scale-110 hover:text-primary-600" />
                            </a>
                            <a target="blank" href="">
                                <TwitterIcon className="h-4 w-4 transition hover:scale-110 hover:text-primary-600" />
                            </a>
                            <a target="blank" href="">
                                <InstagramIcon className="h-4 w-4 transition hover:scale-110 hover:text-primary-600" />
                            </a>
                            <a target="blank" href="">
                                <WhatsappIcon className="h-4 w-4 transition hover:scale-110 hover:text-primary-600" />
                            </a>
                        </div>
                    </div>
                    <ButtonReserve />
                </div>
            </div>
            <div className="relative z-40 hidden h-20 items-center bg-white shadow lg:flex ">
                <div className="container flex  justify-between ">
                    <ApplicationLogo textColor="text-neutral-700" />
                    <div className="flex items-center gap-x-6  text-base font-medium">
                        {navigations.map((navigation, index) => (
                            <LinkNavbar key={index} navigation={navigation} />
                        ))}

                        {auth.user && (
                            <div>
                                <ProfileDropdown />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

const LinkNavbar = ({ navigation }) => {
    return (
        <Link
            href={route(navigation.routeName)}
            className={
                (route().current(navigation.routeActive)
                    ? "border-b-2  border-primary-700 text-primary-700 "
                    : " hover:text-primary-700 ") +
                " py-2 transition-all hover:-translate-y-0.5 "
            }
        >
            {navigation.title}
        </Link>
    );
};

export default NavbarDesktop;
