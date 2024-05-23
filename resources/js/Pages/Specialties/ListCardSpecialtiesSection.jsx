import CardSpecialty from '@/Components/Cards/CardSpecialty'
import TitleSection from '@/Components/TitleSection'
import { ArrowLeftCircleIcon, ArrowLongRightIcon, ArrowRightCircleIcon, CheckCircleIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/16/solid'
import { Link } from '@inertiajs/react'
import React from 'react'

const ListCardSpecialtiesSection = ({ specialties }) => {
    return (
        <div className='bg-primary-50'>
            <div className='container py-section'>
                <TitleSection
                    className='max-w-3xl text-center lg:text-left'
                    title='La lista de tratamientos disponibles'
                    subTitle='NUESTROS SERVICIOS'
                />
                <div className='mt-title-section'>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                        {specialties.map((specialty) => (
                            <CardSpecialty key={specialty.id} specialty={specialty} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ListCardSpecialtiesSection
