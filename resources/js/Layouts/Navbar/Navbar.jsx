import React from 'react'
import NavbarMovil from './NavbarMovil'
import NavbarDesktop from './NavbarDesktop'

import { HomeIcon, ChatBubbleBottomCenterTextIcon, UserGroupIcon, TvIcon, PhoneIcon } from '@heroicons/react/16/solid'

const Navbar = () => {
    const navigations = [
        { title: 'Inicio', routeName: 'home', icon: HomeIcon },
        { title: 'Acerca de', routeName: 'home', icon: UserGroupIcon },
        { title: 'Servicios', routeName: 'home', icon: TvIcon },
        { title: 'Precios', routeName: 'home', icon: TvIcon },
        { title: 'Contactenos', routeName: 'home', icon: PhoneIcon },
        { title: 'Blog', routeName: 'home', icon: ChatBubbleBottomCenterTextIcon },
    ]
    return (
        <>
            {/* <NavbarMovil navigations={navigations} /> */}
            <NavbarDesktop navigations={navigations} />
        </>
    )
}

export default Navbar
