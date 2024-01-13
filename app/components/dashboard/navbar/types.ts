import { IconType } from "react-icons";

export interface SubNavOption extends NavOption {}

export interface NavOption {
    name: string;
    href?: string;
    soon?: boolean;
    subOptions?: SubNavOption[],
    icon?: IconType;
}