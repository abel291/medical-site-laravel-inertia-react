import BannerHead from '@/Components/Banners/BannerHead'
import CardDoctor from '@/Components/Cards/CardDoctor'
import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import FormContact from '../Contact/FormContact'

const Doctors = ({ page, doctors }) => {
    return (
        <Layout>
            <Head title={page.title}></Head>
            <BannerHead title={page.title} breadcrumb={[
                {
                    title: 'Doctores'
                },

            ]} />
            <div className='bg-gray-100 py-section'>
                <div className="container  ">
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10'>
                        {doctors.map((doctor) => (
                            <CardDoctor doctor={doctor} />
                        ))}
                    </div>
                </div>
            </div>

            <div className=''>
                <FormContact />
            </div>
        </Layout>
    )
}

export default Doctors
