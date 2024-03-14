import React from 'react';
import CardComponent from './CardC';
import TypingTextEditor from '../TypingText/TypingText';


const cards: any[] = [
    {
        id: 1,
        imageUrl: 'https://media.istockphoto.com/id/1287186696/photo/food-delivery-app-order-with-phone-online-mobile-service-for-take-away-burger-and-pizza.jpg?s=612x612&w=0&k=20&c=s0g33OOVOT9nZiFat2wvo7HhRvmM5kx0CJBp1OSfbRE=',
        title: 'Restaurant Managements System - Mobile Application',
        description: 'Mobile application for restaurant management with food ordering, table booking, inquiry management and user management.',
        tags: ['React Native', 'Node.js', 'MongoDB']
    },
    {
        id: 2,
        imageUrl: 'https://res.cloudinary.com/dmfljlyu1/image/upload/v1694033302/listened_logo_uhmrcj.png',
        title: 'Sinhala Voice Controlled Audiobook Application(ListenEd)',
        description: 'Sinhala voice controlled audio book application with voice recognition, Ishihara testing, biometric based authentication and book recommandation. This web application is developed for Visually Impaired University Students in Sri Lanka .',
        tags: ['React.js', 'Python', 'NLP', 'Django', 'PostgreSQL']
    },
    {
        id: 3,
        imageUrl: 'https://img.freepik.com/free-photo/high-speed-train-station-blurred-cityscape-night-background-generative-ai_191095-1991.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709251200&semt=ais',
        title: 'Train Ticket Booking Management System',
        description: 'Web application and mobile application for train ticket booking management with ticket management, train management, admin dashboard and user management.',
        tags: ['React.js', 'Java', 'C#', '.Net', 'MongoDB']
    },
    {
        id: 3,
        imageUrl: 'https://cinnamonweb.blob.core.windows.net/cinnamonweb-prd/media/cinnamon-grand-colombo-destination-714x550-DM-Q80.jpeg',
        title: 'Hotel Dashboard',
        description: 'Web application for Hotel Dashboard for a landing page',
        tags: ['React.js']
    },
    {
        id: 4,
        imageUrl: 'https://media.istockphoto.com/id/1500563478/photo/traveler-asian-woman-relax-and-travel-on-thai-longtail-boat-in-ratchaprapha-dam-at-khao-sok.webp?b=1&s=170667a&w=0&k=20&c=PL6F9_KtlUx4E6pl9ryJxR3kLSv-l6aiHAi1DLw84vk=',
        title: 'Travel Management System',
        description: 'Fully functional Travel management system with travel booking, user management, inquiry management & travel guide management.',
        tags: ['React.js', 'Node.js', 'MongoDB']
    },
    {
        id: 5,
        imageUrl: 'https://www.techsoftware.com/wp-content/uploads/2023/10/Techsoft-compliance-913x700.jpg',
        title: 'Research Program Management System',
        description: 'Fully functioning Research program registration system with JWT authentication, user management, admindashboard, files uploading, project selection, supervisor management, inquiry management',
        tags: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Cloudinary']
    },

];

const ProjectsPage: React.FC = () => {
    return (
        <div className="px-14 ">
            <div className='flex justify-center items-center mb-10'>

                <TypingTextEditor text="<My Projects/>" typingSpeed={100} />
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
                {cards.map((card) => (
                    <CardComponent key={card.id} card={card} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
