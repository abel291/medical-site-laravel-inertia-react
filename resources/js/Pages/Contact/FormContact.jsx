import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import TitleSection from '@/Components/TitleSection'
import { useForm, usePage } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import Specialty from '../Specialty/Specialty'
import SelectSpecialty from './SelectSpecialty'
import SelectSurgery from './SelectSurgery'
import SelectDoctor from './SelectDoctor'
import Checkbox from '@/Components/Checkbox'

const FormContact = () => {
    const { specialties, formFake, errors } = usePage().props

    const [surgeries, setSurgeries] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [succesMessage, setSuccesMessage] = useState(false);
    const { data, setData, get, processing } = useForm({
        type: 'form',
        subscribed: false,
        ...formFake
        // name: '',
        // phone: '',
        // email: '',
        // email_confirmation: '',
        // message: '',
        // specialty_id: '',
        // surgery_id: '',
    })

    const handleChange = (e) => {
        let target = e.target

        setData(target.name, target.value)
    }

    const handleChangeSpecialty = (e) => {
        let target = e.target
        setData(target.name, target.value)

    }

    useEffect(() => {
        if (!data.specialty_id || data.specialty_id == 'otros') {

            setData('surgery_id', 'otros')
            setSurgeries([]);

        } else {
            let specialtySelected = specialties.find((specialty) => specialty.id == data.specialty_id);

            if (specialtySelected) {
                setSurgeries(specialtySelected.surgeries);
            } else {
                setSurgeries([]);
            }
            setData('surgery_id', '')
        }
    }, [data.specialty_id])

    const handleSubmit = (e) => {
        e.preventDefault();
        get(route('form-contact'), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setSuccesMessage(true)
            },
            onError: () => {
                setSuccesMessage(false)
            }
        })
    }

    return (
        <div className='container py-section'>
            <TitleSection className='text-center' title='Formulario de contacto' subTitle='COMPLETA EL FORMULARIO' />

            <div className='mt-title-section max-w-3xl mx-auto'>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-6 '>

                    <div className='lg:col-span-3'>
                        <InputLabel htmlFor='name'>Nombre </InputLabel>
                        <TextInput
                            value={data.name}
                            name='name'
                            id='name'
                            className='w-full'
                            onChange={handleChange}
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className='lg:col-span-3'>
                        <InputLabel htmlFor='phone'>Telefono </InputLabel>
                        <TextInput
                            value={data.phone}
                            name='phone'
                            id='phone'
                            className='w-full'
                            onChange={handleChange}
                        />
                        <InputError message={errors.phone} className="mt-2" />
                    </div>
                    <div className='lg:col-span-3'>
                        <InputLabel htmlFor='email'>Email </InputLabel>
                        <TextInput
                            value={data.email}
                            name='email'
                            id='email'
                            className='w-full'
                            onChange={handleChange}
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                    <div className='lg:col-span-3'>
                        <InputLabel htmlFor='email_confirmation'>Confirmar Email </InputLabel>
                        <TextInput
                            value={data.email_confirmation}
                            name='email_confirmation'
                            id='email_confirmation'
                            className='w-full'
                            onChange={handleChange}
                        />
                        <InputError message={errors.email_confirmation} className="mt-2" />
                    </div>

                    <SelectSpecialty
                        data={data}
                        errors={errors}
                        handleChangeSpecialty={handleChangeSpecialty}
                        specialties={specialties}
                    />

                    <SelectSurgery
                        data={data}
                        errors={errors}
                        handleChangeSurgery={handleChange}
                        surgeries={surgeries}
                    />


                    {doctors.length > 0 && (
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
                    )}

                    <div className='lg:col-span-6'>
                        <InputLabel htmlFor='message'>Mensaje </InputLabel>
                        <textarea
                            value={data.message}
                            name='message'
                            id='message'
                            rows={4}
                            onChange={handleChange}
                            className='textarea-form w-full'
                            placeholder='Escribe tu Consulta. Para una mejor atención recomendamos incluir datos como: sexo, edad, provincia y país.' aria-label='Escribe tu Consulta. Para una mejor atención recomendamos incluir datos como: sexo, edad, provincia y país.'
                        />
                        <InputError message={errors.message} className="mt-2" />
                    </div>
                    <div className='lg:col-span-6'>
                        <label className="flex">
                            <Checkbox
                                value={data.subscribed}
                                name="subscribed"
                                className='mt-1'
                                checked={data.subscribed}
                                onChange={(e) => setData('subscribed', e.target.checked)}
                            />
                            <span className="ms-2 text-base font-medium  text-gray-600 dark:text-gray-400">
                                Manténgase informado y nunca se pierda las últimas noticias y consejos de salud.
                            </span>
                        </label>
                        <InputError message={errors.subscribed} className="mt-2" />
                    </div>
                    <div className='lg:col-span-6 pt-5'>
                        {succesMessage ? (
                            <div className=" p-4 text-base bg-green-200 rounded-lg font-medium text-green-700  dark:text-gray-400">
                                ¡Consulta recibida! Ya te enviamos la información a tu email. Recuerda revisar el correo no deseado o spam.
                            </div>
                        ) : (
                            <div className='text-right'>
                                <PrimaryButton className='inline-block' isLoading={processing} disabled={processing}>Enviar Formulario</PrimaryButton>
                            </div>


                        )}
                    </div>
                </form>
            </div >
        </div >
    )
}

export default FormContact
