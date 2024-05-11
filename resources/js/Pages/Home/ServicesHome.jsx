import Card from '@/Components/Cards/Card'
import { Link, usePage } from '@inertiajs/react'
import React from 'react'

const ServicesHome = () => {
    const { specialties } = usePage().props

    return (
        <div className='py-section'>
            <div className='container'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8'>

                    <div>
                        <span className='uppercase text-primary-600 tracking-widest text-sm sm:text-base '>ESPECIALIDADES MÉDICAS</span>
                        <h2 className='title-section mt-2'>Estamos proporcionando los mejores servicios.</h2>
                    </div>

                    {specialties.map((specialty) => (
                        <Card title={specialty.name} entry={specialty.entry} img={specialty.thumb} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ServicesHome
