import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import { MagnifyingGlassIcon, ServerStackIcon } from '@heroicons/react/16/solid'
import React from 'react'

const FormNewsletter = () => {
    return (
        <form action="">
            <div className='flex items-stretch gap-x-2'>
                <TextInput className="w-full text-gray-800" />
                <PrimaryButton>
                    {/* <MagnifyingGlassIcon className='w-5' /> */}
                    Suscribir
                </PrimaryButton>
            </div>
        </form>
    )
}

export default FormNewsletter
