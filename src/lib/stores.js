import { writable } from 'svelte/store';

export const isActiveData = writable({
    about: "active",
    resume: "deactive",
    portfolio: "deactive",
    blog: "deactive",
    contact: "deactive",
});

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