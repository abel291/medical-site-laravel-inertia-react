import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";

const FormContactSidebar = () => {
    const [succesMessage, setSuccesMessage] = useState(false);
    const { errors } = usePage().props;
    console.log(window.location.href);
    const { data, setData, post, processing } = useForm({
        name: "",
        phone: "",
        email: "",
        email_confirmation: "",
        message: "",
        type: "form",
        subscribed: false,
        specialty_id: "",
        surgery_id: "",
        page: window.location.href,
        // ...formFake
    });
    const handleChange = (e) => {
        let target = e.target;
        setData(target.name, target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("form-contact"), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setSuccesMessage(true);
            },
            onError: () => {
                setSuccesMessage(false);
            },
        });
    };
    return (
        <div className="mx-auto max-w-3xl">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 ">
                <div>
                    <InputLabel htmlFor="name">Nombre </InputLabel>
                    <TextInput
                        value={data.name}
                        name="name"
                        id="name"
                        className="w-full"
                        onChange={handleChange}
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="phone">Telefono </InputLabel>
                    <TextInput
                        placeholder="Introdusca un telefono de contacto"
                        value={data.phone}
                        name="phone"
                        id="phone"
                        className="w-full"
                        onChange={handleChange}
                    />
                    <InputError message={errors.phone} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="email">Email </InputLabel>
                    <TextInput
                        value={data.email}
                        name="email"
                        id="email"
                        className="w-full"
                        onChange={handleChange}
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="email_confirmation">
                        Confirmar Email{" "}
                    </InputLabel>
                    <TextInput
                        value={data.email_confirmation}
                        name="email_confirmation"
                        id="email_confirmation"
                        className="w-full"
                        onChange={handleChange}
                    />
                    <InputError
                        message={errors.email_confirmation}
                        className="mt-2"
                    />
                </div>

                <div>
                    <InputLabel htmlFor="message">Mensaje </InputLabel>
                    <textarea
                        value={data.message}
                        name="message"
                        id="message"
                        rows={4}
                        onChange={handleChange}
                        className="textarea-form w-full"
                        placeholder="Escribe tu Consulta. Para una mejor atención recomendamos incluir datos como: sexo, edad, provincia y país."
                        aria-label="Escribe tu Consulta. Para una mejor atención recomendamos incluir datos como: sexo, edad, provincia y país."
                    />
                    <InputError message={errors.message} className="mt-2" />
                </div>
                <div>
                    <label className="flex">
                        <Checkbox
                            value={data.subscribed}
                            name="subscribed"
                            className="mt-1"
                            checked={data.subscribed}
                            onChange={(e) =>
                                setData("subscribed", e.target.checked)
                            }
                        />
                        <span className="ms-2 text-base font-medium  text-gray-600 dark:text-gray-400">
                            Manténgase informado y nunca se pierda las últimas
                            noticias y consejos de salud.
                        </span>
                    </label>
                    <InputError message={errors.subscribed} className="mt-2" />
                </div>

                <div className="pt-5 ">
                    {succesMessage ? (
                        <div className=" flex items-center rounded-lg  bg-green-200 p-4 text-base font-medium text-green-700  dark:text-gray-400">
                            <CheckCircleIcon className="mr-2 h-5 w-5 text-green-600" />
                            ¡Consulta recibida! Ya te enviamos la información a
                            tu email.
                        </div>
                    ) : (
                        <div className="text-right">
                            <PrimaryButton
                                className="w-full"
                                isLoading={processing}
                                disabled={processing}
                            >
                                Enviar Formulario
                            </PrimaryButton>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
};

export default FormContactSidebar;
