import Banner from '@/Components/Banner'
import Guest from '@/Layouts/GuestLayout'
import Layout from '@/Layouts/Layout'
import { ChevronDoubleRightIcon } from '@heroicons/react/16/solid'
import { Head } from '@inertiajs/react'
import React from 'react'
import BannerHome from './BannerHome'
import ContactUsHome from './ContactUsHome'

const Home = () => {
    return (
        <Layout>
            <Head title='Home'></Head>
            <BannerHome />
            <ContactUsHome />
        </Layout>
    )
}

export default Home
