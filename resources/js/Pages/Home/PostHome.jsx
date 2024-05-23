import Card from '@/Components/Cards/Card'
import CardPost from '@/Components/Cards/CardPost'
import TitleSection from '@/Components/TitleSection'
import { Link, usePage } from '@inertiajs/react'
import React from 'react'

const PostHome = () => {
    const { posts } = usePage().props
    return (
        <div className='bg-primary-100'>
            <div className='container  py-14 md:py-20 lg:py-24'>
                <TitleSection className='text-center ' bg="light" title='Noticias y Promociónes' subTitle='accede a nuestro blog' />

                <div className='mt-10 max-w-6xl mx-auto '>
                    <div className='flex flex-col lg:flex-row gap-6 md:gap-10 items-center lg:items-stretch lg:justify-around'>
                        {posts.map((post) => (
                            <CardPost post={post} key={post.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostHome
