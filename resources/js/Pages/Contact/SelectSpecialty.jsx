import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import React from 'react'

const SelectSpecialty = ({ data, errors, handleChangeSpecialty, specialties }) => {
    return (
        <div className='md:col-span-3'>
            <InputLabel htmlFor='specialty_id'>Especialidad </InputLabel>
            <select value={data.specialty_id}

                name='specialty_id'
                id='specialty_id'
                className='select-form w-full'
                onChange={handleChangeSpecialty}
            >
                <option value>Seleccione la especialidad</option>
                {specialties.map((specialty) => (
                    <option key={specialty.id} value={specialty.id}>{specialty.name}</option>
                ))}
                <option value='otros'>Otros</option>
            </select>
            <InputError message={errors.specialty_id} className="mt-2" />
        </div>
    )
}

export default SelectSpecialty
