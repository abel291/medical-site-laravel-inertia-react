import React from 'react'

const TitleSection = ({ title, subTitle = '', bgIsWhite = true, className }) => {

    return (
        <div className={className} >
            {subTitle && (
                <span className={'uppercase  tracking-widest text-sm sm:text-base font-semibold ' +
                    (bgIsWhite ? 'text-primary-600' : 'text-orange-400')}>
                    {subTitle}
                </span>
            )}
            <h2 className={'title-section mt-2 ' + (!bgIsWhite && 'text-white')}>{title}</h2>
        </div>
    )
}

export default TitleSection
