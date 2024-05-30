import BannerHead from "@/Components/Banners/BannerHead";
import Card from "@/Components/Cards/Card";
import DescriptionSection from "@/Components/Sections/DescriptionSection";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import React from "react";

import TitleSection from "@/Components/TitleSection";
import CarouselDoctors from "@/Components/Carousel/CarouselDoctors";
import CarouselDoctorsSection from "@/Components/Sections/CarouselDoctorsSection";
import FormContact from "../Contact/FormContact";
const Specialty = ({ specialty }) => {
    return (
        <Layout>
            <Head title={specialty.meta.title}></Head>
            <BannerHead
                title={specialty.name}
                date={specialty.updateDate}
                breadcrumb={[
                    {
                        title: specialty.name,
                    },
                ]}
            />
            <div className="container">
                <div className="py-section">
                    <DescriptionSection description={specialty.description} />
                </div>
            </div>

            <div className="py-section bg-primary-ligth">
                <CarouselDoctorsSection
                    doctors={specialty.doctors}
                    specialtyTitle={specialty.name}
                />
            </div>

            <div className=" py-section bg-gray-100">
                <div className="container">
                    <TitleSection
                        bg="gray"
                        className="text-center "
                        subTitle={specialty.name}
                        title="Tratamientos y procedimientos"
                    />
                    <div className="mt-title-section flex flex-wrap justify-around gap-8  ">
                        {specialty.surgeries.map((surgery) => (
                            <Card
                                key={surgery.id}
                                path={route("surgery", surgery.slug)}
                                title={surgery.name}
                                entry={surgery.entry}
                                img={surgery.thumb}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <FormContact specialty_id={specialty.id} />
        </Layout>
    );
};

export default Specialty;
