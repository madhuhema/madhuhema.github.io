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
    startDate: new Date(2018, 8, 10),
    endDate: new Date(2020, 11, 30),
    location: "chennai",
    projects: [
      {
        name: "Wellsky",
        description: `Provided mobile solution along with web application using MEAN stack + ionicJS for an online-offline healthcare application.
        Automated the repeated DB tasks by creating CRON scripts. Fixed Production Issues and Documented Root Cause Analysis.
        Improvised the performance of existing codes (like building queries with dynamic fields). Developed a prototype to migrate the existing
        application from ionic 1 to ionic 4. Worked with an agile driven team. Contributed in both Front-end and Back-end tasks.
        Improved reliability of the code by unit testing every feature of the application using Jasmine/Karma before deployment.`,
        position: "Associate Software Developer (Full Stack)",
        techStack:
          "Angular JS, Node.js, Ionic, MySQL, JIRA, Github, Pouch DB for offline integration, Visual Studio Code, Asana", 
      },
      {
        name: "ITRAC (multiple clients)",
        description: `Individually developed portfolio websites for dental organizations across clients’ places with top-notch quality using HTML/CSS/JS.
        Closely worked with UI/UX team, and built responsive websites using SASS oriented frameworks to provide best user experience.
        Took ownership of every task and provided clear estimates. Improved performance/ page speed of several existing sites by fixing issues
        concerning standards. Provided production support. Developed a Webpack boilerplate to migrate sites from gulp boilerplate.
        Handled client meetings, gathered requirements and documented the same for future reference. Provided zero tolerance testing for the
        site before production delivery. Trained new peers on the framework.
        `,
        techStack: "HTML5, SCSS, Javascript, Jquery, Gulp, Webpack",
        position: "Web Developer",
      },
      {
        name: "Quaterly Scale",
        description: `Developed an interactive application to manage the company’s daily internal activities in an efficient manner using Angular.
        Managed a team of 4 members. Maintained project tasks in Zoho projects. Implemented backend using AWS serverless.`,
        techStack:
          "Angular JS, Node.js, Ionic, MySQL, JIRA, Github, Pouch DB for offline integration, Visual Studio Code, Asana",
        position: "Software Developer (Full Stack)",
      },
      {
        name: "Client POC",
        description: `Developed a storage application similar to google drive to store internal files of the company.
        Provided project estimates and task splits using Bitbucket, after brainstorming and requirement gathering with peers.`,
        techStack:
          "Firebase DB, Angular, HTML Canvas, rxjs, ng2-canvas-whiteboard, Grapes JS, Visual Studio code",
        position: "Software Developer (Angular/Firebase)",
      },
    ],
  },
].sort((a, b) =>
  a.startDate.getMilliseconds() > b.startDate.getMilliseconds() ? 1 : -1
);
