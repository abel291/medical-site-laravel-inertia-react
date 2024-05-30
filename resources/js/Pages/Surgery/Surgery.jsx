import BannerHead from "@/Components/Banners/BannerHead";

import CarouselImages from "@/Components/Carousel/CarouselImages";
import DescriptionSection from "@/Components/Sections/DescriptionSection";
import TitleSection from "@/Components/TitleSection";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import React from "react";
import PriceDescription from "./PriceDescription";
import IndexConentSurgery from "./IndexConentSurgery";
import RelatedSurgeriesSection from "./RelatedSurgeriesSection";
import CarouselDoctorsSection from "@/Components/Sections/CarouselDoctorsSection";
import FormContact from "../Contact/FormContact";

const Surgery = ({ surgery, relatedSurgeries }) => {
    // console.log(surgery)
    return (
        <Layout>
            <Head title={surgery.meta.title}></Head>
            <BannerHead
                title={surgery.name}
                date={surgery.updateDate}
                breadcrumb={[
                    {
                        title: surgery.specialty.name,
                        path: route("specialty", surgery.specialty.slug),
                    },
                    {
                        title: surgery.name,
                    },
                ]}
            />

            <div className="container">
                <div className="pt-section flex flex-col place-content-between justify-center gap-10 lg:flex-row lg:justify-between">
                    <div className="hidden md:block">
                        <IndexConentSurgery surgery={surgery} />
                    </div>
                    <div>
                        <PriceDescription />
                    </div>
                </div>
                <div className="py-section" id="descriptionSection">
                    <DescriptionSection description={surgery.description} />
                </div>
            </div>

            <div className="py-section bg-primary-ligth" id="doctorSection">
                <CarouselDoctorsSection
                    doctors={surgery.doctors}
                    specialtyTitle={surgery.name}
                />
            </div>

            <div className="py-section container" id="imageSection">
                <TitleSection
                    className="text-center"
                    title={"Imagenes de " + surgery.name}
                    subTitle="Galería de fotos"
                />
                <div className="mt-title-section">
                    <CarouselImages images={surgery.images} />
                </div>
            </div>

            <RelatedSurgeriesSection relatedSurgeries={relatedSurgeries} />
            <div id="formContactSection">
                <FormContact
                    specialty_id={surgery.specialty.id}
                    surgery_id={surgery.id}
                />
            </div>
        </Layout>
    );
};

export default Surgery;
