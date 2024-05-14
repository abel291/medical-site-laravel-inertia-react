import { ArrowRightEndOnRectangleIcon, ChevronDoubleRightIcon } from '@heroicons/react/16/solid'
import { Link } from '@inertiajs/react'
import React from 'react'

const BannerHead = ({ title = "Inicio", breadcrumb = [] }) => {
    return (
        <div className='gradient-primary pt-20 md:pt-24 lg:pt-36 pb-12 lg:pb-24'>
            <h1 className='text-center text-4xl lg:text-6xl text-orange-300 font-bold'>
                {title}
            </h1>
            <ol className='mt-2 flex text-lg gap-x-1 justify-center items-center font-medium text-white'>
                <li>
                    <Link href={route('home')}>
                        Inicio
                    </Link>
                </li>
                {breadcrumb.map((item, index) => (

                    <li key={index} className='flex items-center gap-x-1'>
                        <ChevronDoubleRightIcon className='h-5 w-5 text-orange-300' />
                        {item.path ? (
                            <Link href={item.path}>
                                {item.title}
                            </Link>
                        ) : (
                            <span>
                                {item.title}
                            </span>
                        )
                        }
                    </li>

                ))}


            </ol>
        </div>
    )
}

export default BannerHead
