import { Skills, Social, Experience, Education } from "@/types";

export const socials: Social[] = [
  {
    icon: "twitterx",
    link: "https://twitter.com/ChadMisa",
  },
  {
    icon: "facebook",
    link: "https://www.facebook.com/chadmisa93",
  },
  {
    icon: "instagram",
    link: "https://www.instagram.com/chaadmisa/",
  },
  {
    icon: "linkedin",
    link: "https://www.linkedin.com/in/chadmisa/",
  },
];

export const skills: Skills[] = [
  { icon: "html", label: "HTML", type: "svg", level: 4 },
  { icon: "javascript", label: "JavaScript", type: "svg", level: 4 },
  { icon: "react", label: "React.js", type: "svg", level: 4 },
  { icon: "css", label: "CSS", type: "svg", level: 4 },
  { icon: "bootstrap", label: "Bootstrap", type: "svg", level: 4 },
  { icon: "less", label: "LESS", type: "svg", level: 4 },
  { icon: "sass", label: "SASS", type: "svg", level: 4 },
  { icon: "redux", label: "Redux", type: "svg", level: 4 },
  { icon: "next", label: "Next.js", type: "svg", level: 3 },
  { icon: "git", label: "Git", type: "svg", level: 4 },
  { icon: "vs-code", label: "VS Code", type: "svg", level: 4 },
  { icon: "tailwind", label: "Tailwind CSS", type: "svg", level: 2.5 },
  { icon: "typescript", label: "TypeScript", type: "svg", level: 2.5 },
  { icon: "jquery", label: "jQuery", type: "svg", level: 2.5 },
  { icon: "php", label: "PHP", type: "svg", level: 2 },
  { icon: "mysql", label: "MySQL", type: "svg", level: 3 },
];

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    date: "Sept 2018 – Jan 2024",
    company: {
      address: "Seattle, WA",
      name: "Matcherino Inc.",
      overview: `Matcherino is the leader in powering online video game tournaments and
        utilizes modern web development and digital payment infrastructure to
        service over one million players globally. Matcherino distributed over
        20 million USD in player prizes from over 65,000 tournaments and
        operates thousands of tournaments monthly.`,
    },
    tasks: [
      `Development of key products including tournament bracketing systems
        for Elimination and Swiss tournament formats.`,
      ` Development of advanced adtech tools enabling tournament sponsorships,
        and website whitelabels for organizations including Microsoft, the
        American Red Cross, CORSAIR, and AAA game publishers Supercell and
        Wizards of the Coast.`,
      ` Conversion to react-i18next framework for language
        internationalization, code conversions to Functional Components and
        Hooks, and codebase migrations to Next.js and TypeScript`,
      "Ensure created features are usable in mobile and web",
      "Peer review code developed by teammates",
      "Debugging and bug fixing production issues.",
    ],
    borderClassName: "border-r-8 border-r-blue-400",
  },
  {
    title: "Associate Technical Specialist",
    date: "Feb 2016 – Oct 2018",
    company: {
      name: "Alliance Software Inc.",
      address: "Cebu City",
      overview: `Alliance Software, Inc. is a global IT services and solutions company. 
      Alliance was established in 2000 and has since grown to become one of the Philippines' 
      largest and most respected independent software development outsourcing company. 
      Alliance's delivery model is anchored on both on-shore and off-shore approach stressing on 
      effective use of our key strengths in our people, process and technology. 
      As part of Alliance’s strategic delivery model, Alliance has established offices in the key markets of Tokyo, 
      Cebu and Manila.`,
    },
    tasks: [
      "Development and implementation of technical works as specified by Client or Project Lead.",
      "Bug fixing and enhancement of an existing Mobile Application software and Store Development Tracking System.",
      "Development of a web application that allows user to create a chat bot.",
      "Creating of SQL scripts to be executed to change Product Details(ex. price, name) of the largest fastfood chain in the Philippines.",
      "Creating of regular expressions to used by bots to crawl jobs in the web.",
    ],
    borderClassName: "border-l-8 border-l-green-400",
  },
  {
    title: "Jr. Programmer/Jr. Implementer",
    date: "Nov 2013 – Jan 2016",
    company: {
      name: "Coredev Solutions Inc.",
      address: "Cebu City",
      overview: `A software company specializing in Integrated accounting and banking system`,
    },
    tasks: [
      "Development and implementation of technical work as specified by supervisor",
      "Field implementer for the company's very own accounting system.",
      "Creating SQL scripts to migrate clients accounting data to the company accounting system database.",
      "Development of Online Membership Portal",
      "Development of Online Voting System",
    ],
    borderClassName: "border-r-8 border-r-green-400",
  },
];

export const educations: Education[] = [
  {
    school: "Cebu Institute of Technology - University",
    degree: "Bachelor of Science in Information Technology",
    year: "Jun 2009 - Mar 2013",
  },
  {
    school: "Consolatrix College of Toledo City",
    degree: "Secondary Education",
    year: "Jun 2005 – Mar 2009",
  },
  {
    school: "South City Central School of Toledo City",
    degree: "Primary Education",
    year: "Jun 1999 – March 2005",
  },
];
