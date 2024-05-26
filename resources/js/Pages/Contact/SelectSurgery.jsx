import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import React from 'react'

const SelectSurgery = ({ data, errors, handleChangeSurgery, surgeries }) => {
    return (

        surgeries.length > 0 && (
            <div className='lg:col-span-3'>
                <InputLabel htmlFor='surgery_id'>Tratamientos </InputLabel>
                <select
                    value={data.surgery_id}
                    name='surgery_id'
                    id='surgery_id'
                    className='select-form w-full'
                    onChange={handleChangeSurgery}
                >
                    <option value>Seleccione el tratamiento</option>
                    {surgeries.map((surgery) => (
                        <option key={surgery.id} value={surgery.id}>{surgery.name}</option>
                    ))}
                    <option value='otros'>Otros</option>
                </select>
                <InputError message={errors.surgery_id} className="mt-2" />
            </div>
        )

    )
}

export default SelectSurgery
