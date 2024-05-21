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

const Home = ({ services, doctors }) => {
    return (
        <Layout>
            <Head title='Home'></Head>
            <BannerHome />
            <PostHome />
            <ServicesHome />
            <AppointmentsSection />
            <DoctorsListSection doctors={doctors} />
            <TestimonialHome />
        </Layout>
    )
}

export default Home
