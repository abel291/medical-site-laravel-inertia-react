import React from 'react'

const TitleSection = ({ title = "", subTitle = "", className = "", bg = 'white', children }) => {

    const textColor = {
        primary: {
            title: 'text-white',
            subTitle: 'text-orange-300'
        },
        white: {
            title: 'text-gray-800',
            subTitle: 'text-primary '
        },
        light: {
            title: 'text-gray-800',
            subTitle: 'text-primary'
        },
        gray: {
            title: 'text-gray-700',
            subTitle: 'text-primary'
        }
    }
    return (
        <div className={className} >
            {subTitle && (
                <span className={'uppercase tracking-widest text-lg font-medium ' + textColor[bg]?.subTitle}>
                    {subTitle}
                </span>
            )}
            <h2 className={"title-section mt-2  " + textColor[bg]?.title}>
                {title ? title : children}
            </h2>
            {/* <div className='border-b-4 w-40 border-primary-700 rounded-full mt-1'></div> */}
        </div>
    )
}
// pb-3.5 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-24 before:h-1.5 before:rounded-full before:bg-primary-700
export default TitleSection

