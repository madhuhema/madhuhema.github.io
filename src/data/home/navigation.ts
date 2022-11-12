import { workExperience } from "./work";

export interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
    isExternal?: boolean;
}

export const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Skills',
        href: '#Skills'
    },
    {
        label: 'Experience',
        href: '#Work',
        children: workExperience.map((company) => ({ label: company.name, subLabel: company.location, href: `#${company.name}-${company.location}` }))
    },
    {
        label: 'Projects',
        href: '#GitProjects',
    },
    {
        label: 'Resume',
        href: '/resume.pdf',
        isExternal: true
    }
];