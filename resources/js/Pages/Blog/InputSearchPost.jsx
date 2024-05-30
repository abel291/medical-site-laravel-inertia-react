import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm, usePage } from "@inertiajs/react";

import React from "react";

const InputSearchPost = () => {
    const { data, setData, get, processing, errors } = useForm({
        search: "",
    });

    function submit(e) {
        e.preventDefault();
        get(route("blog"));
    }

    return (
        <form
            onSubmit={submit}
            className="flex items-center justify-end gap-x-2"
        >
            <TextInput
                className="md:max-w-80"
                required
                value={data.search}
                onChange={(e) => setData("search", e.target.value)}
            />
            <PrimaryButton isLoading={processing} disabled={processing}>
                Buscar
            </PrimaryButton>
        </form>
    );
};

export default InputSearchPost;
