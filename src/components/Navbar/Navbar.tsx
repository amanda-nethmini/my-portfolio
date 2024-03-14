'use client';
import { useState } from 'react';

interface NavbarProps {
    scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
    refs: {
        heroref: React.RefObject<HTMLDivElement>;
        aboutRef: React.RefObject<HTMLDivElement>;
        skillsRef: React.RefObject<HTMLDivElement>;
        educationRef: React.RefObject<HTMLDivElement>;
        projectsRef: React.RefObject<HTMLDivElement>;
        contactRef: React.RefObject<HTMLDivElement>;
    };
}

function Navbar({ scrollToRef, refs }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');

    return (
        <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10">
            <div className=" mx-auto flex justify-between items-center px-14">
                <div className="text-lg font-bold">
                    <p className="text-2xl font-bold cursor-pointer" onClick={() => { scrollToRef(refs.heroref); setActiveSection('home'); }}>I am Amanda</p>
                </div>
                <div className="hidden md:flex space-x-8">
                    <button
                        className={`p-2 px-3 rounded-xl hover:bg-slate-200 hover:text-black `}
                        onClick={() => { scrollToRef(refs.heroref); setActiveSection('home'); }}>
                        Home
                    </button>
                    <button
                        className={`p-2 px-3 rounded-xl hover:bg-slate-200 hover:text-black `}
                        onClick={() => { scrollToRef(refs.aboutRef); setActiveSection('about'); }}>
                        About
                    </button>
                    <button
                        className={`p-2 px-3 rounded-xl hover:bg-slate-200 hover:text-black `}
                        onClick={() => { scrollToRef(refs.skillsRef); setActiveSection('skills'); }}>
                        Skills
                    </button>
                    <button

                        className={`p-2 rounded-xl hover:bg-slate-200 hover:text-black `}
                        onClick={() => { scrollToRef(refs.educationRef); setActiveSection('education'); }}>
                        Education
                    </button>
                    <button
                        className={`p-2 rounded-xl hover:bg-slate-200 hover:text-black `}
                        onClick={() => { scrollToRef(refs.projectsRef); setActiveSection('projects'); }}>
                        Projects
                    </button>

                    <button
                        className={`p-2 px-3 rounded-xl hover:bg-slate-200 hover:text-black `}
                        onClick={() => { scrollToRef(refs.contactRef); setActiveSection('contact'); }}>
                        Contact
                    </button>
                </div>
                <div className="md:hidden">
                    {/* Mobile menu icon/button */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
