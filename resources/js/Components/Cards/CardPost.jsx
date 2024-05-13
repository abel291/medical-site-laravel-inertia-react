import { Link } from '@inertiajs/react'
import React from 'react'

const CardPost = ({ post }) => {
    return (
        <div className='rounded-lg overflow-hidden shadow bg-white max-w-lg'>
            <div className='relative overflow-hidden'>
                <Link
                    href={route('post', post.slug)} aria-label={post.title}>
                    <img src={post.thumb} className='w-full object-cover aspect-video hover:scale-110 transition-transform duration-500 transform' alt="" />
                </Link>
            </div>
            <div className='p-6'>
                <Link href={route('post', post.slug)} >
                    <h3 className='text-2xl font-semibold text-primary-600 ' aria-label={post.title}>{post.title}</h3>
                </Link>
                <p className='font-light text-lg   mt-4'>{post.entry}</p>
            </div>
        </div>
    )
}

export default CardPost
