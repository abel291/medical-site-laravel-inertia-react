import { BuildingOffice2Icon, HomeIcon, RectangleGroupIcon } from "@heroicons/react/16/solid";
import { Link, usePage } from "@inertiajs/react";


export default function ApplicationLogo({ bgIcon = 'bg-primary', colorIcon = 'text-white', textColor = 'text-primary' }) {
    const { appName } = usePage().props
    return (
        <Link className="brand flex items-center" href={route('home')}>
            <span className={"flex items-center p-1.5 rounded-full mr-2 mb-0.5 " + bgIcon}>
                <RectangleGroupIcon strokeWidth={1.5} className={'h-7 w-7 ' + colorIcon} />
            </span>
            <span className={"text-2xl font-bold " + textColor}>
                Medical
            </span>
        </Link>
    );
}
