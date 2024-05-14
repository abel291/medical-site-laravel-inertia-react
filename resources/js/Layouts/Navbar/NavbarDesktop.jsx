import React from 'react'
import { BuildingOffice2Icon } from '@heroicons/react/16/solid'
import { Link, usePage } from '@inertiajs/react'
import PrimaryButton from '@/Components/PrimaryButton'
import ApplicationLogo from '@/Components/ApplicationLogo'
import ButtonReserve from './ButtonReserve'
import ProfileDropdown from './ProfileDropdown'
const NavbarDesktop = ({ navigations }) => {
    const { auth } = usePage().props
    return (

        <nav className="h-24 items-center z-40 relative hidden lg:flex shadow ">
            <div className='container flex  justify-between '>
                <ApplicationLogo textColor="text-neutral-700" />
                <div className='flex items-center gap-x-7'>
                    {navigations.map((navigation, index) => (
                        <Link key={index} href={route(navigation.routeName)} className={
                            (route().current(navigation.routeName)
                                ? 'text-primary-600   '
                                : ' hover:text-primary-600 ') +
                            '  font-medium  '}>
                            {navigation.title}
                        </Link>
                    ))}

                    {/* <Link href={route('contact')} className='btn-primary'>Reservar</Link> */}
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

export default NavbarDesktop
