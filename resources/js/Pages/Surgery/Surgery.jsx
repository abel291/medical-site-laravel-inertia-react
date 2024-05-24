import BannerHead from '@/Components/Banners/BannerHead'

import CarouselImages from '@/Components/Carousel/CarouselImages'
import DescriptionSection from '@/Components/Sections/DescriptionSection'
import TitleSection from '@/Components/TitleSection'
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import PriceDescription from './PriceDescription'
import IndexConentSurgery from './IndexConentSurgery'
import RelatedSurgeriesSection from './RelatedSurgeriesSection'
import CarouselDoctorsSection from '@/Components/Sections/CarouselDoctorsSection'

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
                <div className='pt-section flex flex-col lg:flex-row justify-center lg:justify-between gap-10 place-content-between'>
                    <div className='hidden md:block'>
                        <IndexConentSurgery surgery={surgery} />
                    </div>
                    <div>
                        <PriceDescription />
                    </div>
                </div>
                <div className="py-section" id='descriptionSection'>
                    <DescriptionSection />
                </div>
            </div>

            <div className='py-section bg-primary-ligth' id='doctorSection'>
                <CarouselDoctorsSection doctors={surgery.doctors} specialtyTitle={surgery.name} />
            </div>

            <div className='container py-section' id='imageSection'>
                <TitleSection className='text-center' title={"Imagenes de " + surgery.name} subTitle="Galería de fotos" />
                <div className='mt-title-section'>
                    <CarouselImages images={surgery.images} />
                </div>
            </div>

            <RelatedSurgeriesSection relatedSurgeries={relatedSurgeries} />

        </Layout>
    )
}

export default Surgery
