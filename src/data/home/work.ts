export type Company = {
  name: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  projects: Array<Project>;
};

export type Project = {
  name: string;
  description: string;
  techStack: string;
  position: string;
};

export const workExperience: Array<Company> = [
  {
    name: "CES IT Pvt Ltd",
    startDate: new Date(2018, 8, 1),
    endDate: new Date(2020, 11, 1),
    location: "chennai",
    projects: [
      {
        name: "Wellsky",
        description: `Worked as a full-stack developer in an online-offline healthcare application named 'Wellsky'. Used MEAN stack + ionic. Created scripts for repeated DB tasks.
        Improvised the performance of many existing codes (like building queries with dynamic fields). Fixed Production Issues and Documented Root Cause Analysis. 
        Developed a POC on migrating the existing application from ionic 1 to ionic 4.`,
        position: "Software Developer",
        techStack:
          "Angular JS, Node.js, Ionic, MySQL, JIRA, Github, Pouch DB for offline integration, Visual Studio Code, Asana",
      },
      {
        name: "Quaterly Scale",
        description: `Developed an application to manage the company's daily internal activities in an efficient and interactive manner.
        ● Managed a team of 4 members.
        ● Gathered requirements and Brainstormed technically with the team.
        ● Created and maintained Tasks in Zoho projects.
        ● Learnt AWS serverless and developed backend
        ● Developed frontend with Angular
        ● Acted as POC and conducted daily stand-up.`,
        techStack:
          "Angular JS, Node.js, Ionic, MySQL, JIRA, Github, Pouch DB for offline integration, Visual Studio Code, Asana",
        position: "Software Developer",
      },
      {
        name: "Client POC",
        description: `Developed a storage application similar to google drive to store internal files of the company.

        ● Estimated Project and provided Task splits.
        ● Brainstormed and gathered requirements
        ● Individually Developed and demoed the project`,
        techStack:
          "Firebase DB, Angular, HTML Canvas, rxjs, ng2-canvas-whiteboard, Grapes JS, Visual Studio code",
        position: "Angular/Firebase Developer",
      },
      {
        name: "Static Web Sites(multiple clients)",
        description: `Individually developed portfolio websites for dental organizations across clients’ places with top-notch quality.
        ● Took up ownership of every task and provide clear estimates.
        ● Supported the production process of sites.
        ● Took up the responsibility for testing the sites individually in the staging environment.
        ● Multi-tasked on improving multiple existing sites’ performance/ page speed concerning standards along with regular development work.
        ● Developed a web pack boilerplate as a POC to move the existing sites from the gulp boilerplate.
        `,
        techStack: "HTML5, SCSS, Javascript, Jquery, Gulp, Webpack",
        position: "Web Developer",
      },
    ],
  },
].sort((a, b) =>
  a.startDate.getMilliseconds() > b.startDate.getMilliseconds() ? 1 : -1
);
