import BannerHead from '@/Components/Banners/BannerHead'
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import SectionListSpecialties from './SectionListSpecialties'
import ImageInfrastructureSection from './ImageInfrastructureSection'
import DoctorsList from '@/Components/Sections/DoctorsList'

const Specialties = ({ specialties, page, doctors }) => {
    return (
        <Layout>
            <Head title={page.title}></Head>
            <BannerHead title={page.title} breadcrumb={[
                {
                    title: page.title
                }
            ]} />

            <SectionListSpecialties specialties={specialties} />
            <ImageInfrastructureSection />
            <DoctorsList doctors={doctors} />

        </Layout>
    )
}

export default Specialties
