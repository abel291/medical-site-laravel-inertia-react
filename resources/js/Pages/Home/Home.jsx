import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import BannerHome from './BannerHome'
import ServicesHome from './ServicesHome'
import PostHome from './PostHome'
import AppointmentsSection from './AppointmentsSection'

const Home = ({ services }) => {
    return (
        <Layout>
            <Head title='Home'></Head>
            <BannerHome />
            <PostHome />
            <ServicesHome />
            <AppointmentsSection />
        </Layout>
    )
}

export default Home
