import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import React from 'react'
// import BannerHome from './BannerHome'
import ServicesHome from './ServicesHome'
import PostHome from './PostHome'
import TestimonialHome from './TestimonialHome'
import BannerHome from './BannerHome'
import DoctorsList from '@/Components/Sections/DoctorsList'
import AppointmentsSection from '@/Components/Sections/AppointmentsSection'

const Home = ({ services, doctors }) => {
    return (
        <Layout>
            <Head title='Home'></Head>
            <BannerHome />
            <PostHome />
            <ServicesHome />
            <AppointmentsSection />
            <DoctorsList doctors={doctors} />
            <TestimonialHome />
        </Layout>
    )
}

export default Home
