import { writable } from 'svelte/store';

export const isActiveData = writable({
    about: "active",
    resume: "deactive",
    portfolio: "deactive",
    blog: "deactive",
    contact: "deactive",
});

export const portfolioCategory = [
    "all",
    "web design",
    "application",
    "web development",
];
export const portfolioContent = [
    {
        datacategory: "web development",
        src: "./src/assets/images/project-1.jpg",
        alt: "finance",
        target: "",
    },
    {
        datacategory: "web development",
        src: "./src/assets/images/project-2.png",
        alt: "orizon",
        target: "",
    },
    {
        datacategory: "web design",
        src: "./src/assets/images/project-3.jpg",
        alt: "fundo",
        target: "",
    },
    {
        datacategory: "application",
        src: "./src/assets/images/project-4.png",
        alt: "brawlhalla",
        target: "",
    },
    {
        datacategory: "web design",
        src: "./src/assets/images/project-5.png",
        alt: "dsm.",
        target: "",
    },
    {
        datacategory: "web design",
        src: "./src/assets/images/project-6.png",
        alt: "metaspark",
        target: "",
    },
    {
        datacategory: "web development",
        src: "./src/assets/images/project-7.png",
        alt: "summary",
        target: "",
    },
    {
        datacategory: "application",
        src: "./src/assets/images/project-8.jpg",
        alt: "task manager",
        target: "",
    },
    {
        datacategory: "web development",
        src: "./src/assets/images/project-9.png",
        alt: "arrival",
        target: "",
    },
];

export const profile = writable({
    'name': 'Joel Nickson',
    'email': 'notjoeln@gmail.com',
    'mobile': '(+91) XXX-XXX-XXXX',
    'mobilenowithoutspace': '+91XXXXXXXXXX',
    'linkedin': 'https://www.linkedin.com/in/joel-nickson-0a27721a5/',
    'github': 'http://github.com/Joel-Nickson',
    'twitter': 'https://twitter.com/JoelNickson5',
    'location': 'Kochi, Kerala, INDIA',
})