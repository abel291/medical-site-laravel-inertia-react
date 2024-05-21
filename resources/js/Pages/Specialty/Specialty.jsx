import BannerHead from '@/Components/Banners/BannerHead'
import Card from '@/Components/Cards/Card'
import DescriptionSection from '@/Components/Sections/DescriptionSection'
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import React from 'react'

import TitleSection from '@/Components/TitleSection'
import CarouselDoctors from '@/Components/Carousel/CarouselDoctors'
import CarouselImages from '@/Components/Carousel/CarouselImages'
import CardSurgery from '@/Components/Cards/CardSurgery'


const Specialty = ({ specialty }) => {
    // console.log(specialty)
    return (
        <Layout>
            <Head title={specialty.meta.title} ></Head>
            <BannerHead title={specialty.name} date={specialty.updateDate} breadcrumb={[
                {
                    title: 'Especialidades',
                    path: route('specialties')
                },
                {
                    title: specialty.name
                }
            ]} />
            <div className='container'>
                <div className="py-section">
                    <DescriptionSection />
                </div>
            </div>
            <div className='bg-primary-100 py-section'>
                <div className='container'>
                    <TitleSection className='text-center ' subTitle={specialty.name} title='Tratamientos y procedimientos' />
                    <div className='mt-title-section grid grid-cols-1 lg:grid-cols-1 gap-10 justify-around place-items-center '>
                        {specialty.surgeries.map((surgery) => (
                            <CardSurgery
                                key={surgery.id}
                                surgery={surgery}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className=' py-section'>
                <div className='container'>
                    <TitleSection className='text-center' title="Conozca a nuestros médicos." subTitle="NUESTRO MEJOR MÉDICO" />
                    <div className='mt-title-section'>
                        <CarouselDoctors doctors={specialty.doctors} specialtyTitle={specialty.name} />

                    </div>
                </div>
            </div>





        </Layout>
    )
}

export default Specialty
