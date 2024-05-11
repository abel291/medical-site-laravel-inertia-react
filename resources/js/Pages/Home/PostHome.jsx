import Card from '@/Components/Cards/Card'
import CardPost from '@/Components/Cards/CardPost'
import { Link, usePage } from '@inertiajs/react'
import React from 'react'

const PostHome = () => {
    const { posts } = usePage().props
    return (
        <div className='bg-primary-700/70'>
            <div className='container  py-14 md:py-20 lg:py-24'>
                <div className='text-center'>
                    <h2 className='title-section text-white  '>Noticias y Promociónes</h2>
                    <div className=' w-12 border-t-2 border-white inline-block'></div>
                </div>
                <div className='mt-10 max-w-6xl mx-auto '>
                    <div className='flex flex-col lg:flex-row gap-6 md:gap-10 items-center lg:items-stretch lg:justify-around'>
                        {posts.map((post) => (
                            <CardPost title={post.title} entry={post.entry} img={post.thumb} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostHome
