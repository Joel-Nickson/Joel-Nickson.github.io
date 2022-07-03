import { writable } from 'svelte/store';

export const isActiveData = writable({
    about: "active",
    resume: "deactive",
    portfolio: "deactive",
    blog: "deactive",
    contact: "deactive",
});

export const portfolio_category = [
    "all",
    "web design",
    "application",
    "web development",
];
export const portfolio_content = [
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

export const modalContent = writable({ src: "", alt: "", text: "", isActive: false });

export const testimonials = [
    {
        src: "./src/assets/images/avatar-1.png",
        alt: "Daniel lewis",
        testimonial: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
        voluptate, assumenda tempore sed saepe eaque odio a delectus enim
        architecto dolor omnis officia quidem nesciunt perspiciatis voluptates
        dolores consequuntur dolorum?`,
    }, {
        src: "./src/assets/images/avatar-2.png",
        alt: "Jessica miller",
        testimonial: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
        voluptate, assumenda tempore sed saepe eaque odio a delectus enim
        architecto dolor omnis officia quidem nesciunt perspiciatis voluptates
        dolores consequuntur dolorum?`,
    }, {
        src: "./src/assets/images/avatar-3.png",
        alt: "Emily evans",
        testimonial: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
        voluptate, assumenda tempore sed saepe eaque odio a delectus enim
        architecto dolor omnis officia quidem nesciunt perspiciatis voluptates
        dolores consequuntur dolorum?`,
    }, {
        src: "./src/assets/images/avatar-4.png",
        alt: "Henry william",
        testimonial: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
        voluptate, assumenda tempore sed saepe eaque odio a delectus enim
        architecto dolor omnis officia quidem nesciunt perspiciatis voluptates
        dolores consequuntur dolorum?`,
    },
];

export const profile = {
    'name': 'Joel Nickson',
    'email': 'notjoeln@gmail.com',
    'mobile': '(+91) XXX-XXX-XXXX',
    'mobilenowithoutspace': '+91XXXXXXXXXX',
    'linkedin': 'https://www.linkedin.com/in/joel-nickson-0a27721a5/',
    'github': 'http://github.com/Joel-Nickson',
    'twitter': 'https://twitter.com/JoelNickson5',
    'location': 'Kochi, Kerala, India',
}