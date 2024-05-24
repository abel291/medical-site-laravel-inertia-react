import { CheckCircleIcon, ClockIcon, CurrencyDollarIcon, HeartIcon, MoonIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const PriceDescription = () => {
    return (
        <div className='grid  grid-cols-2  md:grid-cols-3 lg:md:grid-cols-2 xl:md:grid-cols-3 gap-2 md:gap-4 lg:gap-8 bg-primary-ligth p-4 md:p-8 lg:px-14  lg:py-8 rounded '>
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
        <div className='flex items-center gap-x-1.5 font-semibold'>
            <div>
                <Icon className='w-10 lg:w-12 text-primary opacity-55' />
            </div>
            <div>
                <h4 className='opacity-75 text-primary lg:text-lg'>{title}</h4>
                <p className=' text-neutral-800/70 lg:text-xl '>{desc}</p>
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

