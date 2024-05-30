import React from "react";

const DescriptionSection = ({ description = "" }) => {
    return (
        <div
            className="description-content mt-8"
            dangerouslySetInnerHTML={{ __html: description }}
        />
    );
};

export default DescriptionSection;
