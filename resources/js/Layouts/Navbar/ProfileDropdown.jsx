import Dropdown from "@/Components/Dropdown";
import { Menu, Transition } from "@headlessui/react";
import {
    ArrowLeftEndOnRectangleIcon,
    ArrowRightEndOnRectangleIcon,
    ChevronDownIcon,
    ChevronUpDownIcon,
    ShoppingBagIcon,
    UserCircleIcon,
} from "@heroicons/react/16/solid";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

import { Link, usePage } from "@inertiajs/react";
import { Fragment } from "react";

export default function ProfileDropdown({ children }) {
    const navigation_profile = [
        {
            name: "Perfil",
            href: route("home"),
            current: route().current("home"),
            icon: UserCircleIcon,
        },
        {
            name: "Mis reservaciones",
            href: route("profile.reservations"),
            current: route().current("profile.reservations"),
            icon: ShoppingBagIcon,
        },
    ];
    const navigation_sing = [
        {
            name: "Acceder ",
            href: route("login"),
            current: route().current("login"),
            icon: ArrowRightEndOnRectangleIcon,
        },

        {
            name: "Crear cuenta",
            href: route("register"),
            current: route().current("register"),
            icon: ArrowLeftEndOnRectangleIcon,
        },
    ];
    const { auth } = usePage().props;

    return (
        <>
            <Dropdown>
                <Dropdown.Trigger>
                    <button className="inline-flex items-center rounded-md font-medium ">
                        Mi cuenta
                        <ChevronDownIcon
                            className="-mr-1 ml-1 h-5 w-5 text-gray-800"
                            aria-hidden="true"
                        />
                    </button>
                </Dropdown.Trigger>
                <Dropdown.Content align="left">
                    {auth.user ? (
                        <>
                            {navigation_profile.map((item) => (
                                <Dropdown.Link href={item.href} key={item.name}>
                                    <div className="flex items-center">
                                        <item.icon className="mr-2 h-6 w-6 text-primary-600" />
                                        <span>{item.name}</span>
                                    </div>
                                </Dropdown.Link>
                            ))}
                            {auth.user.role == "admin" && (
                                <a
                                    className="dropdown-link"
                                    target="_blank"
                                    href={route("dashboard.home")}
                                >
                                    <div className="flex items-center">
                                        <AdjustmentsHorizontalIcon className="mr-2 h-6 w-6 text-primary-600" />
                                        <span>Dashboard</span>
                                    </div>
                                </a>
                            )}
                            <Dropdown.Link
                                href={route("logout")}
                                method="post"
                                className="border-t"
                            >
                                Cerrar sesión
                            </Dropdown.Link>
                        </>
                    ) : (
                        navigation_sing.map((item) => (
                            <Dropdown.Link href={item.href} key={item.name}>
                                <div className="flex items-center">
                                    <item.icon className="mr-2 h-5 w-5 text-gray-400" />
                                    <span>{item.name}</span>
                                </div>
                            </Dropdown.Link>
                        ))
                    )}
                </Dropdown.Content>
            </Dropdown>
        </>
    );
}
