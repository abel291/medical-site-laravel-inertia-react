import CardDoctor from '@/Components/Cards/CardDoctor'
import TitleSection from '@/Components/TitleSection'
import React from 'react'

const DoctorsListSection = ({ doctors = [] }) => {
    return (
        <div className='container py-section'>
            <TitleSection className='text-center' title="Conozca a nuestros médicos." subTitle="NUESTRO MEJOR MÉDICO" />
            <div className='mt-title-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10'>
                {doctors.map((doctor) => (
                    <CardDoctor key={doctor.id} doctor={doctor} />
                ))}
            </div>
        </div>

    )
}

export default DoctorsListSection
