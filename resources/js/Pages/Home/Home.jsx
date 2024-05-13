import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import React from 'react'
// import BannerHome from './BannerHome'
import ServicesHome from './ServicesHome'
import PostHome from './PostHome'
import AppointmentsSection from './AppointmentsSection'
import DoctorsHome from './DoctorsHome'
import TestimonialHome from './TestimonialHome'
import BannerHome from './BannerHome'

const Home = ({ services, doctors }) => {
    return (
        <Layout>
            <Head title='Home'></Head>
            <BannerHome />
            <PostHome />
            <ServicesHome />
            <AppointmentsSection />
            <DoctorsHome doctors={doctors} />
            <TestimonialHome />
        </Layout>
    )
}

export default Home
