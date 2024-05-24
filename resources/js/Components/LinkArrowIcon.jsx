import { ArrowRightIcon } from '@heroicons/react/16/solid'
import { Link } from '@inertiajs/react'
import React from 'react'

const LinkArrowIcon = ({ path, children }) => {
    return (
        <Link href={path} className=' text-primary-600 group'>
            <div className='flex items-center font-medium'>
                {children}
                <ArrowRightIcon className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
            </div>
        </Link>
    )
}

export default LinkArrowIcon
