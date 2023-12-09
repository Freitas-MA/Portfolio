import Nasser from '../../assets/Project.Images/nasser.png';

export const dataProjects = () => {
    const dataProjectsObj = [{
        id: 'Project1',
        title: 'Space Nas´Ser',
        description: 'This Space Nas´Ser is a React18 app using Vite4 with features like carousels, animations, routing, styling, and email sending, and it supports TypeScript.',
        About: 'This project, named "nasser-portfolio", is a React[^18.2.0^] app using Vite[^4.4.5^] for development and build. It includes various libraries for specific features like `@splidejs/splide`[^4.1.4^] for carousels, `framer-motion`[^10.15.2^] for animations, `react-router-dom`[^6.15.0^] for routing, `styled-components`[^6.0.7^] for styling, and `emailjs-com`[^3.2.0^] for sending emails. Additionally, it uses ESLint[^8.45.0^] for linting and supports TypeScript with `@types/react`[^18.2.15^] and `@types/react-dom`[^18.2.7^].',
        image: Nasser,
        live: 'https://space-nasser.vercel.app/',
        github: 'https://github.com/Freitas-MA/nasser-portfolio'
    }
]
    
    return dataProjectsObj;
}
