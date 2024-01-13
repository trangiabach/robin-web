export interface SidebarSubOption {
    name: string;
    href?: string;
    soon?: boolean;
}

export interface SidebarOptions {
    title: string;
    subOptions: SidebarSubOption[]
};