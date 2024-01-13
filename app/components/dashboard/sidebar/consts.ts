import { clientRoutes } from "@/app/lib/routes";
import { SidebarOptions } from "./types";

export const exploreSidebarOptions: SidebarOptions = {
    title: 'Explore',
    subOptions: [
        {
            name: 'Platform',
            href: clientRoutes.dashboard
        },
        {
            name: 'Finetuning',
            soon: true
        },
    ]
}

export const settingsSidebarOptions: SidebarOptions = {
    title: 'Settings',
    subOptions: [
        {
            name: 'Usage',
            soon: true
        },
        {
            name: 'API Keys',
            soon: true,
        },
        {
            name: 'Team',
            soon: true
        }
    ]
}