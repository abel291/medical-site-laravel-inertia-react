import BannerHead from '@/Components/Banners/BannerHead'
import TitleSection from '@/Components/TitleSection'
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import Section1 from './Section1AboutUs'
import Section1AboutUs from './Section1AboutUs'
import Section2AboutUs from './Section2AboutUs'
import Section3AboutUs from './Section3AboutUs'
import Section4AboutUs from './Section4AboutUs'
import AppointmentsSection from '@/Components/Sections/AppointmentsSection'
import DoctorsList from '@/Components/Sections/DoctorsList'

const AboutUs = ({ page = [], doctor, doctors }) => {
    return (
        <Layout>
            <Head title={page.title}></Head>
            <BannerHead title={page.title} breadcrumb={[
                {
                    title: page.title
                }
            ]} />
            <Section1AboutUs doctor={doctor} />
            <Section2AboutUs />
            <Section3AboutUs />
            <Section4AboutUs />
            <AppointmentsSection />
            <DoctorsList doctors={doctors} />
        </Layout>
    )
}

export default AboutUs
