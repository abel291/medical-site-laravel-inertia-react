import React from 'react'
import NavbarMovil from './NavbarMovil'
import NavbarDesktop from './NavbarDesktop'

import { HomeIcon, ChatBubbleBottomCenterTextIcon, UserGroupIcon, TvIcon, PhoneIcon, SquaresPlusIcon, CurrencyDollarIcon } from '@heroicons/react/16/solid'

const Navbar = () => {
    const navigations = [
        { title: 'Inicio', routeName: 'home', icon: HomeIcon },
        { title: 'Nostros', routeName: 'about', icon: UserGroupIcon },
        { title: 'Especialidad', routeName: 'specialties', icon: SquaresPlusIcon },
        { title: 'Precios', routeName: 'home2', icon: CurrencyDollarIcon },
        { title: 'Fotos de la clinica', routeName: 'home2', icon: PhoneIcon },

        { title: 'Blog', routeName: 'home2', icon: ChatBubbleBottomCenterTextIcon },
        { title: 'Contacto', routeName: 'contact', icon: PhoneIcon },
        // { title: 'Servicios', type: 'componenet', ComponentNavbar: DropdownServices, ComponentNavbarMovil: DropdownServices },

    ]
    return (
        <>
            <NavbarMovil navigations={navigations} />
            <NavbarDesktop navigations={navigations} />
        </>
    )
}

export default Navbar
