import TitleSection from "@/Components/TitleSection";
import React from "react";

const DescriptionDoctor = ({ doctor }) => {
    return (
        <>
            <TitleSection
                title={doctor.name}
                subTitle={"Especialista en " + doctor.specialty.name}
            />
            <div
                className="description-content mt-8"
                dangerouslySetInnerHTML={{ __html: doctor.description }}
            />
        </>
    );
};

export default DescriptionDoctor;
