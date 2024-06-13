import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";

const MapContact = () => {
    return (
        <>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240864.08481701676!2d-99.14361265000001!3d19.3907336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2zQ2l1ZGFkIGRlIE3DqXhpY28sIENETVgsIE3DqXhpY28!5e0!3m2!1ses-419!2sco!4v1716622202848!5m2!1ses-419!2sco"
                className="h-[500px] w-full "
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="relative z-10 mx-auto rounded bg-primary-700 px-6 py-10 lg:-mt-16 lg:max-w-4xl">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <ItemContact title="Línea de ayuda" Icon={PhoneIcon}>
                        316.960.3848 +1-669-901-4595
                    </ItemContact>
                    <ItemContact title="Ubicacion" Icon={MapPinIcon}>
                        86574 Jones Isle North Aryanna, IN 51541-9327
                    </ItemContact>
                    <ItemContact title="Correo electrónico" Icon={EnvelopeIcon}>
                        healthcare@gmail.com
                    </ItemContact>
                </div>
            </div>
        </>
    );
};

const ItemContact = ({ title, Icon, children }) => {
    return (
        <div className="flex gap-x-2 text-white ">
            <div>
                <Icon className="mt-0.5 h-8 w-8 text-orange-300" />
            </div>
            <div>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-1 font-light opacity-80">{children}</p>
            </div>
        </div>
    );
};
export default MapContact;
