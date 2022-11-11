export type SkillSet = {
    label: string,
    scale: number,
    certified?: boolean
}

export const skillSet: Array<SkillSet> = [{
    label: 'Java',
    scale: 4,
    certified: true
}, {
    label: 'Angular',
    scale: 4
}, {
    label: 'Node',
    scale: 4
}, {
    label: 'Adv JS',
    scale: 4
}, {
    label: 'React',
    scale: 3.5
}, {
    label: 'RxJs',
    scale: 4
}, {
    label: 'MySQL',
    scale: 4
}, {
    label: 'MSSQL',
    scale: 4
}, {
    label: 'Mongo',
    scale: 3
}, {
    label: 'AWS',
    scale: 3.5
}, {
    label: 'Docker',
    scale: 3.5
}, {
    label: 'Git',
    scale: 4
}, {
    label: 'Ionic',
    scale: 3
}, {
    label: 'Electron',
    scale: 3
}, {
    label: 'LibGdx(2d Games)',
    scale: 3
}, {
    label: 'Velocity',
    scale: 3.5
}, {
    label: 'Ruby On Rails',
    scale: 3.5
}];