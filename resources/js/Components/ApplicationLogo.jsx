import {
    BuildingOffice2Icon,
    HeartIcon,
    HomeIcon,
    RectangleGroupIcon,
} from "@heroicons/react/16/solid";
import { Link, usePage } from "@inertiajs/react";

export default function ApplicationLogo({
    bgIcon = "bg-primary",
    colorIcon = "text-white",
    textColor = "text-primary",
}) {
    const { appName } = usePage().props;
    return (
        <Link className="brand flex items-center" href={route("home")}>
            <span
                className={
                    "mb-0.5 mr-2 flex items-center rounded-2xl p-1.5 " + bgIcon
                }
            >
                <RectangleGroupIcon
                    strokeWidth={1.5}
                    className={"h-7 w-7 " + colorIcon}
                />
            </span>
            <span className={"text-2xl font-semibold " + textColor}>
                Medical
            </span>
        </Link>
    );
}
