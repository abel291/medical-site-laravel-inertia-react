import { usePage } from '@inertiajs/react';
import React from 'react'
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

// import NotificationToast from '@/Components/NotificationToast';

const Layout = ({ children }) => {
    const { auth } = usePage().props

    return (
        <div className='flex flex-col h-full justify-between min-h-screen' >
            {/* <NotificationToast /> */}
            <Navbar />
            <main className='grow mt-16  lg:mt-0'>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout
