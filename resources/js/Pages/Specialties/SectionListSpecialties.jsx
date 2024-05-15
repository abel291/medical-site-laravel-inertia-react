import CardSpecialty from '@/Components/Cards/CardSpecialty'
import TitleSection from '@/Components/TitleSection'
import { ArrowLeftCircleIcon, ArrowLongRightIcon, ArrowRightCircleIcon, CheckCircleIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/16/solid'
import { Link } from '@inertiajs/react'
import React from 'react'

const SectionListSpecialties = ({ specialties }) => {
    console.log(specialties)
    return (
        <div className='container pt-section'>
            <TitleSection className="mx-auto text-center"
                title='Brindar atención médica a los más enfermos En Nuestra Comunidad.'
                subTitle='NUESTROS SERVICIOS'
            />
            <div className='mt-title-section'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {specialties.map((specialty) => (
                        <CardSpecialty specialty={specialty} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default SectionListSpecialties
