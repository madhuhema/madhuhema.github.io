import { workExperience } from "./work";

export interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Skills',
        href: '#Skills'
    },
    {
        label: 'Work Experience',
        href: '#Work',
        children: workExperience.map((company) => ({ label: company.name, subLabel: company.location, href: `#${company.name}-${company.location}` }))
        //   [
        //     {
        //       label: 'Job Board',
        //       subLabel: 'Find your dream design job',
        //       href: '#',
        //     },
        //     {
        //       label: 'Freelance Projects',
        //       subLabel: 'An exclusive list for contract work',
        //       href: '#',
        //     },
        //   ],
    },
    {
        label: 'Personal Projects',
        href: '#GitProjects',
    }
];