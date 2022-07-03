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

export const education = [
    {
        'name': 'Federal Institute of Science And Technology',
        'shortname': 'FISAT',
        'location': 'Angamaly',
        'degree': 'Bachelor of Technology',
        'major': 'Computer Science',
        'start': '2019',
        'end': '2023',
        'courses': [
            'Data Structures',
            'Algorithms',
            'Object Oriented Programming',
            'Web Development',
            'Database Management',
            'Software Engineering',
            'Computer Networks',
            'Computer Graphics',
            'Computer Architecture',
        ],
        'url': 'https://www.fisat.ac.in/',
    },
    {
        'name': 'Don Bosco Senior Secondary School',
        'shortname': 'Don Bosco',
        'location': 'Vaduthala',
        'degree': 'Higher Secondary',
        'major': 'Computer Science',
        'start': '2017',
        'end': '2019',
        'url': 'https://donboscoschoolvaduthala.edu.in/',
    },
    // {
    //     'name': 'Don Bosco Senior Secondary School',
    //     'shortname': 'Don Bosco',
    //     'location': 'Vaduthala',
    //     'degree': 'High School',
    //     'major': '',
    //     'start': '',
    //     'end': '2017',
    //     'url': 'https://donboscoschoolvaduthala.edu.in/',
    // },
]

export const experiences = [
    {
        'name': 'Verzeo',
        'location': 'Bengaluru, Karnataka, India',
        'role': 'ReactJS Intern',
        'type': 'Internship',
        'start': '11/21',
        'end': '02/22',
        'description': 'Added functionality to return search results based on index for the Golang backend',
        'url': 'https://verzeo.com/',
    },
]

export const projects = [
    {
        'company': 'Meilisearch',
        'title': 'Paris based Open Source Search Engine Startup',
        'location': 'Paris, Ile-de-France, France',
        'role': 'Open Source Contributor',
        'type': ['Open Source', 'Backend'],
        'start': '10/21',
        'end': '11/21',
        'language': ['Go'],
        'description': 'Added functionality to return search results based on index for the Golang backend',
        'url': 'https://www.meilisearch.com/',
    },
    {
        'company': 'FISAT',
        'title': 'KEAM college predictor',
        'location': 'Mookkannoor, Angamaly, Kerala',
        'role': 'Web Developer',
        'type': ['Open Source', 'Frontend', 'Backend', 'Full Stack'],
        'start': '08/21',
        'end': '09/21',
        'language': ['Python', 'HTML', 'CSS'],
        'framework': ['Django'],
        'description': 'Predict college based on Kerala Entrance Rank using historical metrics',
        'url': 'https://github.com/FISAT-PROJECTS/keam-project',
    },
    {
        'company': 'Co Science',
        'title': 'Telegom',
        'location': 'Kochi, Kerala',
        'role': 'Backend Developer',
        'type': ['Open Source', 'Backend'],
        'start': '05/21',
        'end': '12/21',
        'language': ['Go'],
        'framework': [],
        'description': 'Minimalistic Telegram Bot backend made with Gorilla Web toolkit',
        'url': 'https://github.com/Co-Science/tele-go-m',
    },
    {
        'company': '',
        'title': 'Maze',
        'location': 'Kochi, Kerala',
        'role': 'Freelance',
        'type': ['Open Source', 'Frontend'],
        'start': '02/21',
        'end': '03/21',
        'language': ['Java'],
        'framework': [],
        'description': 'GUI based Path finding algorithm using BFS & DFS',
        'url': 'https://github.com/Co-Science/tele-go-m',
    },
]


export const projectsComingSoon = [
    {
        'company': 'Kerala Govn',
        'title': '',
        'type': ['Open Source', 'Frontend', 'Backend', 'Full Stack'],
        'start': '8/21',
        'end': '',
        'language': ['JavaScript', 'HTML', 'CSS', 'PHP'],
        'framework': ['Angular', 'Laravel'],
        'description': 'Web dev Internship',
        'url': '',
    },
    {
        'company': 'FISAT',
        'title': '',
        'type': ['Web', 'Frontend'],
        'start': '7/21',
        'end': '',
        'language': ['JavaScript', 'HTML', 'CSS'],
        'framework': ['ReactJS', 'NextJS'],
        'description': 'ML ops',
        'url': '',
    },
    {
        'company': 'Microsoft',
        'title': 'Research Intern',
        'type': ['Web', 'Frontend'],
        'start': '7/21',
        'end': '',
        'language': [],
        'framework': [],
        'description': 'ML ops',
        'url': '',
    },
]

export const skills = [
    {
        'name': 'JavaScript',
        'value': '70',
        'level': 'Intermediate',
        'url': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        'name': 'ReactJS',
        'value': '60',
        'level': 'Intermediate',
        'url': 'https://reactjs.org/',
    },
    {
        'name': 'Angular',
        'value': '50',
        'level': 'Beginner',
        'url': 'https://angular.io/',
    },
    {
        'name': 'Svelte',
        'value': '50',
        'level': 'Beginner',
        'url': 'https://svelte.dev/',
    },
    {
        'name': 'NodeJS',
        'value': '50',
        'level': 'Intermediate',
        'url': 'https://nodejs.org/en/',
    },
    {
        'name': 'Golang',
        'value': '80',
        'level': 'Intermediate',
        'url': 'https://golang.org/',
    },
    {
        'name': 'Python',
        'value': '90',
        'level': 'Expert',
        'url': 'https://www.python.org/',
    },
    {
        'name': 'Django',
        'value': '60',
        'level': 'Intermediate',
        'url': 'https://www.djangoproject.com/',
    },
    {
        'name': 'HTML',
        'value': '90',
        'level': 'Expert',
        'url': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
        'name': 'CSS',
        'value': '90',
        'level': 'Expert',
        'url': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
        'name': 'Git',
        'value': '90',
        'level': 'Intermediate',
        'url': 'https://git-scm.com/',
    },
    {
        'name': 'Java',
        'value': '80',
        'level': 'Intermediate',
        'url': 'https://www.java.com/',
    },
    {
        'name': 'C',
        'value': '70',
        'level': 'Intermediate',
        'url': 'https://www.cprogramming.com/',
    },
    {
        'name': 'Dart',
        'value': '90',
        'level': 'Beginner',
        'url': 'https://dart.dev/',
    },
    {
        'name': 'Flutter',
        'value': '90',
        'level': 'Intermediate',
        'url': 'https://flutter.dev/',
    }
]


export const selectSkills = [
    {
        'name': 'Python',
        'value': '90',
        'level': 'Expert',
        'url': 'https://www.python.org/',
    },
    {
        'name': 'HTML',
        'value': '90',
        'level': 'Expert',
        'url': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
        'name': 'CSS',
        'value': '90',
        'level': 'Expert',
        'url': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
        'name': 'Git',
        'value': '90',
        'level': 'Intermediate',
        'url': 'https://git-scm.com/',
    },
    {
        'name': 'Golang',
        'value': '80',
        'level': 'Intermediate',
        'url': 'https://golang.org/',
    },
    {
        'name': 'JavaScript',
        'value': '70',
        'level': 'Intermediate',
        'url': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        'name': 'Java',
        'value': '60',
        'level': 'Intermediate',
        'url': 'https://www.java.com/',
    },
    {
        'name': 'ReactJS',
        'value': '60',
        'level': 'Intermediate',
        'url': 'https://reactjs.org/',
    },
    {
        'name': 'Svelte',
        'value': '60',
        'level': 'Beginner',
        'url': 'https://svelte.dev/',
    },
]