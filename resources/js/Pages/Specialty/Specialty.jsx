import BannerHead from '@/Components/Banners/BannerHead'
import Card from '@/Components/Cards/Card'
import DescriptionSection from '@/Components/Sections/DescriptionSection'
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import React from 'react'

import TitleSection from '@/Components/TitleSection'
import CarouselDoctors from '@/Components/Carousel/CarouselDoctors'
const Specialty = ({ specialty }) => {

    return (
        <Layout>
            <Head title={specialty.meta.title} ></Head>
            <BannerHead title={specialty.name} date={specialty.updateDate} breadcrumb={[
                {
                    title: specialty.name
                }
            ]} />
            <div className='container'>
                <div className="py-section">
                    <DescriptionSection />
                </div>
            </div>


            <div className=' py-section bg-primary-100'>
                <div className='container'>
                    <TitleSection bg='light' className='text-center' title="Conozca a nuestros médicos." subTitle="NUESTRO MEJOR MÉDICO" />
                    <div className='mt-title-section'>
                        <CarouselDoctors doctors={specialty.doctors} specialtyTitle={specialty.name} />
                    </div>
                </div>
            </div>

            <div className=' py-section bg-gray-100'>
                <div className='container'>
                    <TitleSection bg='gray' className='text-center ' subTitle={specialty.name} title='Tratamientos y procedimientos' />
                    <div className='mt-title-section flex flex-wrap gap-8 justify-around  '>
                        {specialty.surgeries.map((surgery) => (
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
            </div>





        </Layout>
    )
}

export default Specialty
