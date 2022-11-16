export type GitProject = {
    name: string,
    repoName?: string,
    description: string,
    techStack: string,
    link?: string,
    demo?: string,
    competition: boolean,
    interface?: string
}
export const gitProjects: Array<GitProject> = [{
    name: `Smart India Hackathon-2018-Runner Up`,
    techStack: `Angular 9, Node JS, MongoDB`,
    description: `An Angular 9 based web application for Truck management in Food Depot between different checkposts using QR code.`,
    competition: true
},
{
    name: `Warzone Game`,
    link: `https://github.com/madhuhema/SOEN6441-Project`,
    repoName: `SOEN6441-Project`,
    techStack: `Java, Design Patterns, Javadoc, JUnit`,
    description: `A strategy based game to conquer a given map between multiple players built using Java and design patterns`,
    competition: true
},
{
    name: `Quick Order App`,
    link: `https://github.com/madhuhema/quick-order-api`,
    repoName: `quick-order-api`,
    techStack: `Angular 14, Node JS, MySQL, Swagger, OAuth`,
    description: `MEAN Stack based web application for customers coming to the hotels to place/update/delete/track/pay order from their tables.`,
    competition: true,
    interface: ``
},
{
    name: `Vaccination Management System`,
    link: `https://github.com/madhuhema/vaxsys`,
    repoName: `vaxsys`,
    techStack: `Angular 14, Java`,
    description: `An Angular 14 application to schedule/update/delete vaccination slots based on vaccine availabilities.`,
    competition: true,
    interface: ``
},
{
    name: `Wordle Game`,
    link: `https://github.com/madhuhema/wordle-game`,
    repoName: `wordle-game`,
    techStack: `Javascript, HTML, CSS`,
    description: `A Javascript based web application with interactive UI for famous word guessing game.`,
    competition: true,
    interface: ``
},
{
    name: `Real-time Whiteboard`,
    link: `https://github.com/madhuhema/angular-grapejs-firebase-db`,
    repoName: `angular-grapejs-firebase-db`,
    techStack: `Angular, Firebase, Grape JS`,
    description: `Multiple users can connect and use whiteboard to showcase ideas, diagrams etc., simultaneously.`,
    competition: true,
    interface: `https://vaxsys-demo.herokuapp.com/`
},
{
    name: `My tasks`,
    link: `https://github.com/madhuhema/react-myTasks`,
    demo: 'http://react-tasks.madhuvanthi.com',
    repoName: `react-myTasks`,
    techStack: `React, Typescript, Node JS`,
    description: `A simple todo list react application to create/update/delete/track daily tasks`,
    competition: true
}]