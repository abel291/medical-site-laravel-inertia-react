import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import React from 'react'
// import BannerHome from './BannerHome'
import ServicesHome from './ServicesHome'
import PostHome from './PostHome'
import TestimonialHome from './TestimonialHome'
import BannerHome from './BannerHome'
import DoctorsListSection from '@/Components/Sections/DoctorsListSection'
import AppointmentsSection from '@/Components/Sections/AppointmentsSection'
import ContactHomeSection from './ContactHomeSection'
import AboutHospitalHome from './AboutHospitalHome'

const Home = ({ services, doctors }) => {
    return (
        <Layout>
            <Head title='Home'></Head>
            <BannerHome />
            <ContactHomeSection />
            <AboutHospitalHome />
            <ServicesHome />
            <AppointmentsSection />
            <DoctorsListSection doctors={doctors} />
            <TestimonialHome />
            <PostHome />
        </Layout>
    )
}

export default Home
