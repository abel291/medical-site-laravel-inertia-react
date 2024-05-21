import BannerHead from '@/Components/Banners/BannerHead'
import Card from '@/Components/Cards/Card'
import CarouselDoctors from '@/Components/Carousel/CarouselDoctors'
import CarouselImages from '@/Components/Carousel/CarouselImages'
import DescriptionSection from '@/Components/Sections/DescriptionSection'
import TitleSection from '@/Components/TitleSection'
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import PriceDescription from './PriceDescription'

const Surgery = ({ surgery, relatedSurgeries }) => {
    // console.log(surgery)
    return (
        <Layout>
            <Head title={surgery.meta.title} ></Head>
            <BannerHead title={surgery.name} date={surgery.updateDate} breadcrumb={[
                {
                    title: surgery.specialty.name,
                    path: route('specialty', surgery.specialty.slug)
                },
                {
                    title: surgery.name
                }
            ]} />
            <div className='container'>
                <div className="py-section">
                    <PriceDescription />
                    <div className='mt-8'>
                        <DescriptionSection />
                    </div>
                </div>
            </div>

            <div className=' py-section'>
                <div className='container'>
                    <TitleSection className='text-center' title="Conozca a nuestros médicos." subTitle="NUESTRO MEJOR MÉDICO" />
                    <div className='mt-title-section'>
                        <CarouselDoctors doctors={surgery.doctors} specialtyTitle={surgery.name} />
                    </div>
                </div>
            </div>

            <div className='bg-primary-100 py-section'>
                <div className='container'>
                    <TitleSection className='text-center ' title='Cirugias relacionadas' />
                    <div className='mt-title-section grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center'>
                        {relatedSurgeries.map((surgery) => (
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

            <div className='py-section'>
                <div className='container'>
                    <TitleSection className='text-center' title={"Imagenes de " + surgery.specialty.name} subTitle="Galería de fotos" />
                    <div className='mt-title-section'>
                        <CarouselImages images={surgery.images} />
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Surgery
