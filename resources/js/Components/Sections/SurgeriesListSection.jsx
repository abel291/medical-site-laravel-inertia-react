import React from 'react'
import TitleSection from '../TitleSection'
import Card from '../Cards/Card'

const SurgeriesListSection = ({ surgeries }) => {
    return (
        <div className='container py-section'>
            <div className=''>
                <TitleSection className='text-center' title='Tratamientos y procedimientos' />
            </div>
            <div className='mt-title-section grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center'>
                {surgeries.map((surgery) => (
                    <Card
                        key={surgery.id}
                        path={route('surgery', surgery.slug)}
                        title={surgery.name}
                        entry={surgery.entry}
                        img={surgery.thumb}
                    />
                ))}
            </div>
        </div>
    )
}

export default SurgeriesListSection
