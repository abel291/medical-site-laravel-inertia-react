import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Sidebar from './Sidebar'




export default function NavbarMovil({ navigations }) {
    const [open, setOpen] = useState(false)

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <nav className='bg-primary-700 lg:hidden fixed top-0 w-full z-40 shadow'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 ">
                <div className="relative flex h-16 items-center justify-between">
                    <button onClick={() => setOpen(true)} type='button' className='-m-[10px] p-[10px]'>
                        <Bars3Icon onClick={() => setOpen(false)} className=" text-white block h-7 w-7" aria-hidden="true" />
                    </button>
                    <Sidebar navigations={navigations} open={open} setOpen={setOpen} />
                </div>
            </div>

        </nav >
    )
}
