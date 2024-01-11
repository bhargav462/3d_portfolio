import { meta, shopify, starbucks, tesla, microsoft, rakuten, shipsy } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    java,
    c,
    cPlusPlus,
    postgres,
    redshift,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: postgres,
        name: "Postgres SQL",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: redshift,
        name: "Redshift",
        type: "Database",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Backend",
    },
    {
        imageUrl: cPlusPlus,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
];

export const experiences = [
    {
        title: "Software Developer",
        company_name: "Shipsy",
        icon: shipsy,
        iconBg: "#BFCFE7",
        date: "May 2022 - Present",
        points: [
            "SKILLS USED: Node Js, React Js, Postgres SQL, Redshift, Mongo DB",
            "Optimized Virtual Number Generation to significantly reduce costs",
            "Developed a third party reconciliation system that enabled riders to do COD reconciliation at near by stores, streamlining the process and improving efficiency",
            "Created an intuitive search feature in the dispatch management screen to enhance user experience",
            "Developed a cron microservice that enables other microservices to easily schedule and automate tasks, improving overall efficiency",
            "Designed and implemented an incident management system responsible for ticket creation and user notification in the event of an incident breach"
        ],
    },
    {
        title: "Software Developer",
        company_name: "Rakuten",
        icon: rakuten,
        iconBg: "#fbc3bc",
        date: "July 2021 - April 2022",
        points: [
            "Developed an understanding of agile methodology",
            "Developed an understanding of codebase of RCP (Rakuten Cloud Platform) and contributed to the UI using Angular as a Frontend Developer",
            "Worked in a cloud environment and learned Kubernetes",
        ],
    },
    {
        title: "Software Developer Intern",
        company_name: "Microsoft",
        icon: microsoft,
        iconBg: "#F8F4EC",
        date: "March 2020 - May 2020",
        points: [
            "Applied different kind of filters to comments with a simple UI in word online to increase the user experience",
            "Developed an understanding of codebase of word online",
            "Developed the debugging skills by working in a large-scale project",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Ecof e-commerce for farmers',
        description: 'Platform helps the farmers to sell their crops directly to the buyer. Farmers can also manage their profile like add, registration, update and delete crop using SMS services',
        link: 'https://friendly-ramanujan-6c6336.netlify.app',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Connected Deliveries',
        description: 'User who need the items from a particular place can request the user who went to that place where the item was available and vice versa',
        link: 'https://github.com/bhargav462/ConnectedDeliveries',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Red Carvings',
        description: 'e-commerce website to buy the red sandalwood products',
        link: 'https://www.redcarvings.com/',
    },
];