import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import React from 'react'

const SelectDoctor = ({ data, errors, doctors }) => {
    return (

        doctors.length > 0 && (
            <div className='lg:col-span-3'>
                <InputLabel htmlFor='doctor_id'>Doctores </InputLabel>
                <select
                    value={data.doctor_id}
                    name='doctor_id'
                    id='doctor_id'
                    className='select-form w-full bg-gray-100'
                    onChange={handleChange}
                >
                    <option value></option>
                    {doctors.map((surgery) => (
                        <option key={surgery.id} value={surgery.id}>{surgery.name}</option>
                    ))}
                    <option value='otros'>Otros</option>
                </select>
                <InputError message={errors.doctor_id} className="mt-2" />
            </div>
        )

    )
}

export default SelectDoctor
