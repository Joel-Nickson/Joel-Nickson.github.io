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
    "web developement",
    "application",
    "artificial intelligence",
    "other",
    "coming soon",
];
export const portfolio_content = [
    {
        datacategory: "search engine",
        src: "./src/assets/images/project-1.jpg",
        alt: "meilisearch",
        target: "https://www.meilisearch.com/",
    }, {
        datacategory: "web developement",
        src: "./src/assets/images/project-2.png",
        alt: "KEAM college predictor",
        target: "https://github.com/FISAT-PROJECTS/keam-project",
    }, {
        datacategory: "web developement",
        src: "./src/assets/images/project-3.jpg",
        alt: "telegom",
        target: "https://github.com/Co-Science/tele-go-m",
    }, {
        datacategory: "application",
        src: "./src/assets/images/project-4.png",
        alt: "libre-fit",
        target: "https://github.com/HackOnTheWay",
    }, {
        datacategory: "artificial intelligence",
        src: "./src/assets/images/project-7.png",
        alt: "Video Summarizer",
        target: "",
    }, {
        datacategory: "application",
        src: "./src/assets/images/project-6.png",
        alt: "Maze",
        target: "",
    }, {
        datacategory: "coming soon",
        src: "./src/assets/images/project-9.png",
        alt: "dragon a.i.",
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
    'role': 'Web Developer',
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
            'Formal Language and Automata Theory',
            'Compiler Design',
        ],
        'description': 'B.Tech in Computer Science & Engineering with major in Machine Learning',
        'url': 'https://www.fisat.ac.in/',
    }, {
        'name': 'Don Bosco Senior Secondary School',
        'shortname': 'Don Bosco',
        'location': 'Vaduthala',
        'start': '2017',
        'end': '2019',
        'description': 'High School with major in Computer Science',
        'url': 'https://donboscoschoolvaduthala.edu.in/',
    },
]

export const experiences = [
    {
        'name': 'ACM FISAT',
        'location': 'Angamaly, Kerala, India',
        'role': 'Event Head',
        'type': 'Volunteer',
        'start': '11/21',
        'end': 'present',
        'description': ['Designed, Developed & Coordinated the website for the ICEFOSS, an open source initiative from FISAT CSE', 'Designed & Developed the website for the Hackfit, a national Hackathon conducted by ICEFOSS', 'Conducted training sessions for python, git, and basics of web development for junior CSE students'],
        'url': 'https://verzeo.com/',
    }, {
        'name': 'Verzeo',
        'location': 'Bengaluru, Karnataka, India',
        'role': 'ReactJS Intern',
        'type': 'Internship',
        'start': '11/21',
        'end': '02/22',
        'description': ['Created a website using React router', 'Designed and coded a React-based “To Do” web app to enable users to keep track of tasks', 'Worked with react redux to store data in the application'],
        'url': 'https://verzeo.com/',
    }
]

export const services = [{
    src: "./src/assets/images/icon-design.svg",
    alt: "design icon",
    title: "Web design",
    desc: 'The most modern and high-quality design made at a professional level.'
}, {
    src: "./src/assets/images/icon-dev.svg",
    alt: "Web development icon",
    title: 'Web development',
    desc: 'High-quality development of sites at the professional level.'
}, {
    src: "./src/assets/images/icon-app.svg",
    alt: "mobile app icon",
    title: 'Mobile apps',
    desc: 'Basic development of applications for iOS and Android.'
}, {
    src: "./src/assets/images/icon-photo.svg",
    alt: "camera icon",
    title: 'Artificial Intelligence',
    desc: 'Learning ML and DL from deeplearning.ai & MIT OCW.'
}]

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