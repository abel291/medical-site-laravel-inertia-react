import React from "react";
import NavbarMovil from "./NavbarMovil";
import NavbarDesktop from "./NavbarDesktop";

import {
    HomeIcon,
    ChatBubbleBottomCenterTextIcon,
    UserGroupIcon,
    TvIcon,
    PhoneIcon,
    SquaresPlusIcon,
    CurrencyDollarIcon,
    UserIcon,
} from "@heroicons/react/16/solid";

const Navbar = () => {
    const navigations = [
        {
            title: "Inicio",
            routeName: "home",
            routeActive: "home",
            icon: HomeIcon,
        },
        {
            title: "Nostros",
            routeName: "about",
            routeActive: "about",
            icon: UserGroupIcon,
        },
        {
            title: "Especialidad",
            routeName: "specialties",
            routeActive: "specialties",
            icon: SquaresPlusIcon,
        },
        {
            title: "Medicos",
            routeName: "doctors",
            routeActive: "doctors.*",
            icon: UserIcon,
        },
        {
            title: "Fotos de la clinica",
            routeName: "home2",
            routeActive: "home2",
            icon: PhoneIcon,
        },
        {
            title: "Blog",
            routeName: "blog",
            routeActive: "blog",
            icon: ChatBubbleBottomCenterTextIcon,
        },
        {
            title: "Contacto",
            routeName: "contact",
            routeActive: "contact",
            icon: PhoneIcon,
        },
        // { title: 'Servicios', type: 'componenet', ComponentNavbar: DropdownServices, ComponentNavbarMovil: DropdownServices },
    ];
    return (
        <>
            <NavbarMovil navigations={navigations} />
            <NavbarDesktop navigations={navigations} />
        </>
    );
};

export default Navbar;
