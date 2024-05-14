import React from 'react'

const TitleSection = ({ title = '', subTitle = '', bgIsWhite = true, className, children }) => {

    return (
        <div className={'max-w-3xl ' + className} >
            {subTitle && (
                <span className={'uppercase  tracking-widest  font-bold ' +
                    (bgIsWhite ? 'text-primary' : 'text-orange-300')}>
                    {subTitle}
                </span>
            )}
            <h2 className={'title-section mt-2 leading-relaxed ' + (!bgIsWhite && 'text-white')}>
                {title ? title : children}
            </h2>
        </div>
    )
}

export default TitleSection
