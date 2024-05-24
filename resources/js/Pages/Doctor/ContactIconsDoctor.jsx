import { EnvelopeIcon, MapPinIcon, PhoneArrowDownLeftIcon } from '@heroicons/react/24/outline'
import React from 'react'

const ContactIconsDoctor = ({ doctor }) => {

    return (
        <div >
            <IconContact Icon={PhoneArrowDownLeftIcon}>
                {doctor.phone}
            </IconContact>
            <IconContact Icon={EnvelopeIcon}>
                {doctor.email}
            </IconContact>
            <IconContact Icon={MapPinIcon}>
                {doctor.address}
            </IconContact>

        </div>
    )
}

const IconContact = ({ Icon, children }) => {
    return (
        <div className='flex items-center mt-4'>
            <div className='w-10 h-10 bg-primary-ligth text-primary rounded-full p-2 mr-3 flex-shrink-0'>
                <Icon className='w-full h-full ' />
            </div>
            <span className='font-medium'>{children}</span>
        </div>
    )
}

export default ContactIconsDoctor
