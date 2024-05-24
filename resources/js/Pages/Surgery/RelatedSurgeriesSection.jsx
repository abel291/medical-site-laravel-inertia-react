import Card from '@/Components/Cards/Card'
import TitleSection from '@/Components/TitleSection'
import React from 'react'

const RelatedSurgeriesSection = ({ relatedSurgeries }) => {
    return (
        <div className='bg-primary-ligth py-section' id='relatedSurgeriesSection'>
            <div className='container'>
                <TitleSection bg={false} className='text-center' title='Tratameintos relacionados' />
                <div className='mt-title-section flex flex-wrap gap-8 justify-around place-items-center'>
                    {relatedSurgeries.map((surgery) => (
                        <div key={surgery.id} >
                            <Card
                                key={surgery.id}
                                path={route('surgery', surgery.slug)}
                                title={surgery.name}
                                entry={surgery.entry}
                                img={surgery.thumb}
                            />
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default RelatedSurgeriesSection
