import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Sidebar from './Sidebar'
import { EnvelopeIcon, PhoneIcon, Bars3Icon } from '@heroicons/react/20/solid'
import { Link } from '@inertiajs/react'
import ApplicationLogo from '@/Components/ApplicationLogo'




export default function NavbarMovil({ navigations }) {
    const [open, setOpen] = useState(false)

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <nav className='bg-white lg:hidden fixed top-0 w-full z-40 shadow'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 ">
                <div className="relative flex h-16 items-center justify-between">
                    <button onClick={() => setOpen(true)} type='button' className='-m-[10px] p-[10px]'>
                        <Bars3Icon onClick={() => setOpen(false)} className=" text-primary-500 block h-7 w-7" aria-hidden="true" />
                    </button>
                    <ApplicationLogo textColor='text-neutral-800' />
                    <Sidebar navigations={navigations} open={open} setOpen={setOpen} />
                    <div className='flex items-center gap-x-2'>
                        <Link className='bg-primary-600 py-1 px-1.5 rounded'>
                            <PhoneIcon className='w-6 h-6 text-white ' />
                        </Link>
                        <Link className='bg-primary-600 py-1 px-1.5 rounded'>
                            <EnvelopeIcon className='w-6 h-6 text-white ' />
                        </Link>
                    </div>
                </div>
            </div>

        </nav >
    )
}
