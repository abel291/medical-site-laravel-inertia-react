import { ArrowLongRightIcon } from '@heroicons/react/16/solid'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import { Link } from '@inertiajs/react'
import React from 'react'
import LinkArrowIcon from '../LinkArrowIcon'

const CardPost = ({ post }) => {
    return (
        <div className='rounded-lg overflow-hidden  bg-white max-w-md flex flex-col border '>
            <div className='relative overflow-hidden'>
                <Link
                    href={route('post', post.slug)} aria-label={post.title}>
                    <img src={post.thumb} className='w-full object-cover aspect-video hover:scale-110 transition-transform duration-500 transform' alt="" />
                </Link>
            </div>
            <div className='px-8 pt-8 pb-6  flex flex-col grow  justify-between'>
                <div>

                    <Link href={route('post', post.slug)} className='flex items-center text-primary-700 group'>
                        <h3 className='text-primary-700 text-2xl font-semibold'>{post.title}</h3>
                        <ArrowLongRightIcon className='w-7 h-6 ml-2 group-hover:translate-x-4 transition-transform ease-in-out' />
                    </Link>

                    <div className='opacity-65    mt-3 '>
                        <p className='text-lg'>{post.entry}</p>
                    </div>
                </div>
                <div className='mt-2 flex justify-between items-center'>
                    <span className='opacity-65 mt-2  text-right text-lg'>
                        12 mayo,2024
                    </span>
                    <LinkArrowIcon path={route('post', post.slug)}>
                        Ver mas
                    </LinkArrowIcon>
                </div>

            </div>
        </div>
    )
}

export default CardPost
