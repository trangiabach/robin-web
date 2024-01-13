"use client"
import { clientRoutes } from "@/app/lib/routes";
import { IconType } from "react-icons";
import { NavOption } from "./types";
import { GiRobinHoodHat } from "react-icons/gi";
import { GiHunterEyes } from "react-icons/gi";
import { GiSherlockHolmes } from "react-icons/gi";

export const modelIconMap: Record<string, IconType> = {
    robin: GiRobinHoodHat,
    hunt: GiHunterEyes,
    holmes: GiSherlockHolmes
}

export const navOptions: NavOption[] = [
    {
        name: 'models',
        subOptions: [
            {
                name: 'Robin',
                href: clientRoutes.models('robin'),
                icon: modelIconMap['robin']
            },
            {
                name: 'Hunt',
                href: clientRoutes.models('hunt'),
                icon: modelIconMap['hunt']
            },
            {
                name: 'Holmes',
                href: clientRoutes.models('holmes'),
                icon: modelIconMap['holmes']
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