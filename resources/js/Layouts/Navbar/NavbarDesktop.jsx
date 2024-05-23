import React, { Component } from 'react'
import { BuildingOffice2Icon } from '@heroicons/react/16/solid'
import { Link, usePage } from '@inertiajs/react'
import PrimaryButton from '@/Components/PrimaryButton'
import ApplicationLogo from '@/Components/ApplicationLogo'
import ButtonReserve from './ButtonReserve'
import ProfileDropdown from './ProfileDropdown'

const NavbarDesktop = ({ navigations }) => {
    const { auth } = usePage().props
    return (

        <nav className="h-20 items-center z-40 relative hidden lg:flex shadow ">
            <div className='container flex  justify-between '>
                <ApplicationLogo textColor="text-neutral-700" />
                <div className='flex items-center gap-x-4  text-base font-medium'>
                    {navigations.map((navigation, index) =>
                        <LinkNavbar key={index} navigation={navigation} />
                    )}


                    {auth.user && (
                        <div >
                            <ProfileDropdown />
                        </div>
                    )}


                    <ButtonReserve />

                </div>
            </div>
        </nav>
    )
}

const LinkNavbar = ({ navigation }) => {
    return (
        <Link href={route(navigation.routeName)} className={
            (route().current(navigation.routeName)
                ? 'text-primary-700  font-medium '
                : ' hover:text-primary-700 ') +
            ' hover:-translate-y-0.5 transition-all py-2'}>
            {navigation.title}
        </Link>
    )


}

export default NavbarDesktop
