import React from 'react'
import NavbarMovil from './NavbarMovil'
import NavbarDesktop from './NavbarDesktop'

import { HomeIcon, ChatBubbleBottomCenterTextIcon, UserGroupIcon, TvIcon, PhoneIcon } from '@heroicons/react/16/solid'

const Navbar = () => {
    const navigations = [
        { title: 'Inicio', routeName: 'home', icon: HomeIcon },
        { title: 'Nostros', routeName: 'home2', icon: UserGroupIcon },
        { title: 'Servicios', routeName: 'home2', icon: TvIcon },
        { title: 'Precios', routeName: 'home2', icon: TvIcon },
        { title: 'Blog', routeName: 'home2', icon: ChatBubbleBottomCenterTextIcon },
        { title: 'Contacto', routeName: 'home2', icon: PhoneIcon },


    ]
    return (
        <>
            <NavbarMovil navigations={navigations} />
            <NavbarDesktop navigations={navigations} />
        </>
    )
}

export default Navbar
