'use client'
import React, { useState } from 'react';
import TypingTextEditor from '../TypingText/TypingText';
import Image from 'next/image';

const Education = () => {
    const [educationCollapsed, seteducationCollapsed] = useState<any>({});
    const [experienceCollapsed, setexperienceCollapsed] = useState<any>({});

    const toggleExCollapse = (id: any) => {
        setexperienceCollapsed((prevState: { [x: string]: any; }) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    }

    const toggleCollapse = (id: any) => {
        seteducationCollapsed((prevState: { [x: string]: any; }) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const portfolioEntries = [
        {
            id: 1,
            title: 'BSc(Hons) in Information Technology Specialized in Software Engineering',
            period: 'Sri Lanka Institute of Information Technology (2020 - 2024)',
            description: 'I followed the BSc(Hons) in Information Technology Specialized in Software Engineering at SLIIT. I have completed the degree in 2024.',
            image: 'https://res.cloudinary.com/ahmedshiraf/image/upload/v1486455047/SLIIT-7871.png'
        },
        {
            id: 2,
            title: 'BSc Management (Public) General (External) Degree',
            period: 'University of Sri Jayewardenepura (2019 - Present)',
            description: 'I am currently pursuing the BSc Management (Public) General (External) Degree at University of Sri Jayewardenepura.',
            image: 'https://upload.wikimedia.org/wikipedia/en/1/1f/University_of_Sri_Jayewardenepura_crest.png'
        },
        {
            id: 3,
            title: 'Advanced Level Examination',
            period: 'Ananda Balika Vidyalaya - Colombo - 10 (2019)',
            description: 'I have completed the G.C.E. (A/L) Examination in 2019.',
            image: 'https://www.anandabalika.edu.lk/images/logo.png'
        },
        {
            id: 4,
            title: 'Ordinary Level Examination',
            period: 'Ananda Balika Vidyalaya - Colombo - 10 (2016)',
            description: 'I have completed the G.C.E. (O/L) Examination in 2016.',
            image: 'https://www.anandabalika.edu.lk/images/logo.png'
        },
    ];

    const ExperienceEntries = [
        {
            id: 1,
            title: 'Finance Assistant',
            period: 'Helvetas-Sri Lanka (2023 August - 2024 January)',
            description: 'I worked as a Finance Assistant at Helvetas-Sri Lanka. I was responsible for the day-to-day financial transactions and reporting.',
            image: 'data:image/png;base64,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'
        },
        {
            id: 2,
            title: 'Intern - Software Engineer',
            period: 'Bluechip Technologies Asia - Colombo (2022 August - 2023 January)',
            description: 'I worked as an Intern - Software Engineer at Bluechip Technologies Asia. I was responsible for the development of many systems in the company.',
            image: 'data:image/jpeg;base64,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'



        }
    ];

    return (
        <div className=' px-14'>
            <div className='flex justify-center items-center'>
                <TypingTextEditor text="<Education and Experience />" typingSpeed={100} />
            </div>
            <div className='flex flex-col md:flex-row justify-center  gap-3'>
                <div className="py-10 container mx-auto ">
                    <h1 className="text-4xl font-bold text-gray-800 mb-5"> Education
                        <span className="text-red-500">.</span>
                    </h1>
                    {portfolioEntries.map((entry) => (
                        <div key={entry.id} className="mb-5">
                            <div className="flex group items-center cursor-pointer" onClick={() => toggleCollapse(entry.id)}>
                                <div className="flex-1 z-10 font-medium">
                                    <div className="bg-[#ffffff] rounded-lg transition-ease duration-500 lg:w-/12 shadow-md ">
                                        <div className='flex flex-row'>
                                            <div className='py-4 px-4 flex-none'>
                                                <img src={entry.image} alt='image' className='
                                                w-20 h-20 object-cover rounded-xl' />
                                            </div>
                                            <div className='py-3 px-1 pe-3 w-full'>
                                                <div className='flex flex-row w-full'>
                                                    <h3 className="mb-3 font-bold text-blue-950 md:text-2xl w-11/12 text-lg">
                                                        {entry.title}
                                                    </h3>
                                                    <span className='px-5 w-2/12 text-blue-950 flex mt-2 justify-end items-start'>
                                                        {educationCollapsed[entry.id] ?
                                                            <Image src={'/Assets/Images/chevron-up.svg'} width={15} height={15} alt="Amanda Nethmini" /> :
                                                            <Image src={'/Assets/Images/chevron-down.svg'} width={15} height={15} alt="Amanda Nethmini" />}
                                                    </span>
                                                    {/* '▲' : '▼'} */}
                                                </div>
                                                <p className="text-sm text-gray-600">{entry.period}</p>
                                            </div>
                                        </div>
                                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${educationCollapsed[entry.id] ? 'max-h-96' : 'max-h-0'}`}>
                                            <div className='px-4'>
                                                <hr />
                                                <p className="text-sm mt-2 pb-4 font-medium leading-snug tracking-wide text-gray-400 text-opacity-100">
                                                    {entry.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="py-10 container mx-auto ">
                    <h1 className="text-4xl font-bold text-gray-800 mb-5"> Experience
                        <span className="text-red-500">.</span>
                    </h1>
                    {ExperienceEntries.map((entry) => (
                        <div key={entry.id} className="mb-5">
                            <div className="flex group items-center cursor-pointer" onClick={() => toggleExCollapse(entry.id)}>
                                <div className="flex-1  z-10 font-medium">
                                    <div className="bg-[#ffffff] rounded-lg transition-ease duration-500 lg:w-/12 shadow-md ">
                                        <div className='flex flex-row'>
                                            <div className='py-4 px-4 flex-none'>
                                                <img src={entry.image} alt='image' className='
                                                w-20 h-20 object-cover rounded-xl' />
                                            </div>
                                            <div className='py-3 px-1 pe-3 w-full'>
                                                <div className='flex flex-row w-full'>
                                                    <h3 className="mb-3 font-bold text-blue-950 md:text-2xl w-11/12 text-lg">
                                                        {entry.title}
                                                    </h3>
                                                    <span className='px-5 w-2/12 text-blue-950 flex mt-2 justify-end items-start'>
                                                        {experienceCollapsed[entry.id] ?
                                                            <Image src={'/Assets/Images/chevron-up.svg'} width={15} height={15} alt="Amanda Nethmini" /> :
                                                            <Image src={'/Assets/Images/chevron-down.svg'} width={15} height={15} alt="Amanda Nethmini" />}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-600">{entry.period}</p>
                                            </div>
                                        </div>
                                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${experienceCollapsed[entry.id] ? 'max-h-96' : 'max-h-0'}`}>
                                            <div className='px-4'>
                                                <hr />
                                                <p className="text-sm mt-2 pb-4 font-medium leading-snug tracking-wide text-gray-400 text-opacity-100">
                                                    {entry.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
