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
    scale: 4,
    certified: true
}, {
    label: 'Node',
    scale: 4
}, {
    label: 'Adv JS',
    scale: 4,
    certified: true
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
    label: 'Agile',
    scale: 4
}, {
    label: 'HTML',
    scale: 4.5
}, {
    label: 'CSS',
    scale: 4.5
}, {
    label: 'Swagger',
    scale: 4
}];