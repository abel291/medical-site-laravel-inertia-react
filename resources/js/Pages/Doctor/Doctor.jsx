import BannerHead from "@/Components/Banners/BannerHead";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TitleSection from "@/Components/TitleSection";
import Layout from "@/Layouts/Layout";
import {
    ArrowRightIcon,
    CheckCircleIcon,
    ShareIcon,
} from "@heroicons/react/16/solid";
import {
    EnvelopeIcon,
    MapPinIcon,
    PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import DescriptionDoctor from "./DescriptionDoctor";
import SurgeriesDoctor from "./SurgeriesDoctor";
import ContactIcons from "./ContactIconsDoctor";
import ContactIconsDoctor from "./ContactIconsDoctor";
import FormContact from "../Contact/FormContact";

const Doctor = ({ doctor }) => {
    return (
        <Layout>
            <Head title={doctor.meta.title}></Head>
            <BannerHead
                title={doctor.name}
                date={doctor.updateDate}
                breadcrumb={[
                    {
                        title: "Doctores",
                        path: route("doctors"),
                    },
                    {
                        title: doctor.name,
                    },
                ]}
            />
            <div className="container">
                <div className="py-section">
                    <div className="grid grid-cols-12 gap-x-10">
                        <div className=" col-span-4  space-y-6">
                            <img
                                src={doctor.image}
                                className="rounded-lg"
                                alt=""
                            />
                            <ContactIconsDoctor doctor={doctor} />
                            <div>
                                <iframe
                                    className="h-80 w-full"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23958.00319829746!2d2.091309994842051!3d41.35777866340407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498e7672e0317%3A0x36127a984f4c05d5!2sL&#39;Hospitalet%20de%20Llobregat%2C%20Barcelona%2C%20Espa%C3%B1a!5e0!3m2!1ses!2sco!4v1716548142922!5m2!1ses!2sco"
                                    width="600"
                                    height="450"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div className="mt-8 flex items-center gap-x-6">
                                <PrimaryButton>
                                    <div className="flex items-center">
                                        Contactar conmigo
                                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                                    </div>
                                </PrimaryButton>
                                <SecondaryButton>
                                    <div className="flex items-center">
                                        <ShareIcon className="mr-2 h-4 w-4" />
                                        Compartir
                                    </div>
                                </SecondaryButton>
                            </div>
                        </div>
                        <div className=" col-span-8 divide-y">
                            <div className="pb-8">
                                <DescriptionDoctor doctor={doctor} />
                            </div>

                            <div className="py-8">
                                <SurgeriesDoctor doctor={doctor} />
                            </div>
                            {/* <div className='py-8'>
                                <SurgeriesDoctor doctor={doctor} />
                            </div> */}
                        </div>
                    </div>
                    <FormContact />
                </div>
            </div>
        </Layout>
    );
};

export default Doctor;
