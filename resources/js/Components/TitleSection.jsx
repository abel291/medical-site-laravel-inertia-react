import React from 'react'

const TitleSection = ({ title, subTitle = '', bgIsWhite = true }) => {

    return (
        <div >
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
