import TitleSection from '@/Components/TitleSection'
import React from 'react'

const DescriptionDoctor = ({ doctor }) => {
    return (
        <>
            <TitleSection title={doctor.name} subTitle={"Especialista en " + doctor.specialty.name} />
            <div className='mt-8'>
                {doctor.description}
            </div>
        </>
    )
}

export default DescriptionDoctor
