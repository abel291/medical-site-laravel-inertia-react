import { ArrowRightEndOnRectangleIcon, ChevronDoubleRightIcon } from '@heroicons/react/16/solid'
import { Link } from '@inertiajs/react'
import React from 'react'

const BannerHead = ({ title = "Inicio", breadcrumb = [], date = "" }) => {
    return (
        <div className='gradient-primary pt-20 md:pt-24 lg:pt-32 pb-16 lg:pb-24 text-center lg:text-left'>
            <div className='container'>
                {date && (
                    <p className='text-white/70 font-light  '>Actualizado {date}</p>
                )}
                <h1 className=' text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mt-1 lg:mt-2'>
                    {title}
                </h1>
                <ol className='mt-1 lg:mt-3 inline-flex text-lg font-medium gap-x-1  items-center  text-white'>
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
                            )}
                        </li>

                    ))}
                </ol>

            </div>
        </div>
    )
}

export default BannerHead
