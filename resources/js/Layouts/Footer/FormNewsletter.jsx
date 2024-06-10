import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import {
    CheckCircleIcon,
    MagnifyingGlassIcon,
    ServerStackIcon,
} from "@heroicons/react/16/solid";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";

const FormNewsletter = () => {
    const [succesMessage, setSuccesMessage] = useState(false);
    const { data, setData, processing, post, errors, clearErrors } = useForm({
        email: "user@user.com",
    });
    console.log(data.email);
    const handleSubmit = (e) => {
        e.preventDefault();
        clearErrors();
        post(route("subscription"), {
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
        <form onSubmit={handleSubmit}>
            {succesMessage ? (
                <div className=" flex items-center rounded-lg  bg-green-200 p-4 text-base font-medium text-green-700  dark:text-gray-400">
                    <CheckCircleIcon className="mr-2 h-5 w-5 text-green-600" />
                    Te has suscrito al boletin de manera exitosa
                </div>
            ) : (
                <div>
                    <div className="flex items-stretch gap-x-2">
                        <TextInput
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className="w-full text-gray-800"
                        />
                        <PrimaryButton
                            isLoading={processing}
                            className="border border-white"
                        >
                            Suscribirse
                        </PrimaryButton>
                    </div>
                    <InputError
                        className="mt-2 inline-block rounded-sm bg-red-500 px-4 font-medium text-white"
                        message={errors.email}
                    />
                </div>
            )}
        </form>
    );
};

export default FormNewsletter;
