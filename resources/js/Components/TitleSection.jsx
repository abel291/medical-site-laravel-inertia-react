import React from 'react'

const TitleSection = ({ title = '', subTitle = '', bgIsWhite = true, className = '', children }) => {

    return (
        <div className={className} >
            {subTitle && (
                <span className={'uppercase tracking-widest text-lg font-medium ' +
                    (bgIsWhite ? 'text-primary' : 'text-orange-300')}>
                    {subTitle}
                </span>
            )}
            <h2 className={"title-section mt-2  " + (!bgIsWhite && 'text-white')}>
                {title ? title : children}
            </h2>
            {/* <div className='border-b-4 w-40 border-primary-700 rounded-full mt-1'></div> */}
        </div>
    )
}
// pb-3.5 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-24 before:h-1.5 before:rounded-full before:bg-primary-700
export default TitleSection

