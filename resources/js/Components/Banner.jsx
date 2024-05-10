import { ChevronDoubleRightIcon } from '@heroicons/react/16/solid'
import React from 'react'
import PrimaryButton from './PrimaryButton'

const Banner = ({ title, breadcrumb = [] }) => {
    return (
        <div className='pt-40 pb-20 flex items-center  '>
            <div className='container'>
                <div className='max-w-2xl'>
                    <h1 className='text-7xl font-bold  '>{title}</h1>
                    <p className='mt-4 text-lg text-neutral-600 font-light'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam fuga exercitationem, possimus vel voluptatum quos suscipit eum, quasi eos itaque eaque aut. Tempora autem nobis laboriosam optio perferendis obcaecati magnam.
                    </p>
                    <div className='mt-4'>
                        <PrimaryButton>Conoce mas</PrimaryButton>
                    </div>
                </div>

                {/*<div className='flex font-medium  '>
                     <ol className='mt-2  flex gap-x-1 '>
                        <li className='flex items-center'>
                            <a href={route('home')}>Inicio</a>
                            <ChevronDoubleRightIcon className='ml-1 w-5 h-5  text-secondary-500' />
                        </li>
                        <li className='flex items-center'>
                            <a href="">Acerca de</a>
                        </li>
                    </ol>
                </div>*/}
            </div>
        </div>
    )
}

export default Banner
