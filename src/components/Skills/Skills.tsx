import Image from 'next/image';
import React from 'react';
import TypingTextEditor from '../TypingText/TypingText';

interface SkillCardProps {
    src: string;
    alt: string;
    title: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ src, alt, title }) => {
    return (
        <div className="border bg-white border-gray-200 rounded-2xl hover:shadow-lg overflow-hidden group transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div className="relative w-full h-32 lg:h-48 flex items-center justify-center">
                <Image src={src} alt={alt} width={100} height={100} />
            </div>
            <div className="px-4 py-3 bg-white border-t-2 border-indigo-500">
                <h2 className="text-center text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{title}</h2>
            </div>
        </div>
    );
};

const skillData = [
    { src: "/Assets/logos/HTML.png", alt: "HTML", title: "HTML" },
    { src: "/Assets/logos/CSS.png", alt: "CSS", title: "CSS" },
    { src: "/Assets/logos/JavaScript.png", alt: "JavaScript", title: "JavaScript" },
    { src: "/Assets/logos/React-Dark.png", alt: "React", title: "React.js" },
    { src: "/Assets/logos/NextJS-Dark.png", alt: "Next.js", title: "Next.js" },
    { src: "/Assets/logos/NodeJS-Dark.png", alt: "Node.js", title: "Node.js" },
    { src: "/Assets/logos/ExpressJS-Dark.png", alt: "Express", title: "Express" },
    { src: "/Assets/logos/Python-Dark.png", alt: "Python", title: "Python" },
    { src: "/Assets/logos/Django.png", alt: "Django", title: "Django" },
    { src: "/Assets/logos/Bootstrap.png", alt: "Bootstrap", title: "Bootstrap" },
    { src: "/Assets/logos/TailwindCSS-Dark.png", alt: "Tailwind CSS", title: "Tailwind CSS" },
    { src: "/Assets/logos/Github-Dark.png", alt: "GitHub", title: "GitHub" },
    { src: "/Assets/logos/Figma-Dark.png", alt: "Figma", title: "Figma" },
    { src: "/Assets/logos/MongoDB.png", alt: "MongoDB", title: "MongoDB" },
    { src: "/Assets/logos/PostgreSQL-Dark.png", alt: "PostgreSQL", title: "PostgreSQL" },
];

const Skills: React.FC = () => {
    return (
        <div>
            <main className="min-h-screen p-10 ">
                <div className='flex justify-center items-center'>
                    <TypingTextEditor text="<My Skills/>" typingSpeed={100} />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:px-10 py-20">
                    {skillData.map((skill) => (
                        <SkillCard key={skill.alt} src={skill.src} alt={skill.alt} title={skill.title} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Skills;
