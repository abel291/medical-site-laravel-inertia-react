import Dropdown from '@/Components/Dropdown'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

import React from 'react'
import DropdownNavbar from './DropdownNavbar'
import { usePage } from '@inertiajs/react'

const DropdownServices = ({ navigation }) => {
    const { services } = usePage().props

    return (
        <DropdownNavbar title="Servicios" links={services} />
    )
}

export default DropdownServices
