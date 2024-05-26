import BannerHead from '@/Components/Banners/BannerHead'
import Layout from '@/Layouts/Layout'

import { Head } from '@inertiajs/react'
import React from 'react'
import MapContact from './MapContact'
import FormContact from './FormContact'

const Contact = ({ page, doctors }) => {
    return (
        <Layout>
            <Head title={page.title}></Head>
            <BannerHead title={page.title} breadcrumb={[
                {
                    title: page.title
                }
            ]} />
            <div className='pb-section'>
                <MapContact />
            </div>
            <FormContact />



        </Layout>
    )
}



export default Contact
