"use client"
import { clientRoutes } from "@/app/lib/routes";
import { IconType } from "react-icons";
import { NavOption } from "./types";
import { GiRobinHoodHat } from "react-icons/gi";
import { GiSherlockHolmes } from "react-icons/gi";

export const modelIconMap: Record<string, IconType> = {
    'robin-hunt': GiRobinHoodHat,
   'robin-holmes': GiSherlockHolmes
}

export const navOptions: NavOption[] = [
    {
        name: 'models',
        subOptions: [
            {
                name: 'robin-hunt',
                href: clientRoutes.overviewModels('robin-hunt'),
                icon: modelIconMap['robin-hunt']
            },
            {
                name: 'robin-holmes',
                href: clientRoutes.overviewModels('robin-holmes'),
                icon: modelIconMap['robin-holmes']
            }
        ]
    },
    {
        name: 'dashboard',
        href: clientRoutes.dashboard
    },
    {
        name: 'playground',
        soon: true
    },
    {
        name: 'docs',
        soon: true
    }
]