import { CheckCircleIcon, ClockIcon, CurrencyDollarIcon, HeartIcon, MoonIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const PriceDescription = () => {
    return (
        <div className='grid grid-cols-3 gap-4  '>
            <ItemDesc title='Duración' desc='Variable' />
            <ItemDesc title='Recuperación' desc='7 Días' Icon={HeartIcon} />
            <ItemDesc title='Anestesia' desc='General' Icon={MoonIcon} />
            <ItemDesc title='Resultados' desc='Duraderos' Icon={CheckCircleIcon} />
            <ItemDesc title='Internación' desc='1 - 2 Días' Icon={PlusCircleIcon} />
            <ItemDesc title='Precio' desc='$1.000' Icon={CurrencyDollarIcon} />
        </div>
    )
}
const ItemDesc = ({ title = '', desc = '', Icon = ClockIcon }) => {
    return (
        <div className='  font-medium  flex items-center gap-x-1 text-lg'>

            <div className=''>
                <div className='flex items-center text-primary opacity-75'>
                    <Icon className='w-5 h-5  mr-1' />
                    <h4 className=''>{title}</h4>
                </div>

                <p className=' text-neutral-600 font-medium'>{desc}</p>
            </div>
        </div>
    )
}

export default PriceDescription

// const PriceDescription = () => {
//     return (
//         <div className='inline-grid grid-cols-2 gap-y-3 md:gap-y-6" bg-primary-200/70 p-8 rounded-lg'>
//             <ItemDesc title='Duración' desc='Variable' />
//             <ItemDesc title='Recuperación' desc='7 Días' Icon={HeartIcon} />
//             <ItemDesc title='Anestesia' desc='General' Icon={MoonIcon} />
//             <ItemDesc title='Resultados' desc='Duraderos' Icon={CheckCircleIcon} />
//             <ItemDesc title='Internación' desc='1 - 2 Días' Icon={PlusCircleIcon} />
//             <ItemDesc title='Precio' desc='$1.000' Icon={CurrencyDollarIcon} />
//         </div>
//     )
// }
// const ItemDesc = ({ title = '', desc = '', Icon = ClockIcon }) => {
//     return (
//         <div className='  font-medium text-lg flex items-center gap-x-1'>
//             <div>
//                 <Icon className='w-14 h-14 text-primary-700/70' />
//             </div>
//             <div>
//                 <h4 className='text-primary-700 text-lg'>{title}</h4>
//                 <p className='text-lg text-neutral-600 font-semibold'>{desc}</p>
//             </div>
//         </div>
//     )
// }

