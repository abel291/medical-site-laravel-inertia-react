import { usePage } from "@inertiajs/react";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

// import NotificationToast from '@/Components/NotificationToast';

const Layout = ({ children }) => {
    const { auth } = usePage().props;

    return (
        <div className="flex h-full min-h-screen flex-col justify-between">
            {/* <NotificationToast /> */}
            <Navbar />
            <main className="mt-16 grow  lg:mt-0">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
