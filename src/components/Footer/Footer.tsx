import Image from "next/image";
import Link from "next/link";



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


export default function Footer({ scrollToRef, refs }: NavbarProps) {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="xl:flex lg:flex md:flex justify-between">
                    <div className="xl:w-1/4 lg:w-1/4 md:w-1/2 mb-6">
                        <h5 className="uppercase font-bold mb-2.5">Quick Links</h5>
                        <ul className="list-none footer-links">
                            <li className="mb-2">
                                <p className="cursor-pointer" onClick={() => { scrollToRef(refs.heroref) }}>Home</p>
                            </li>
                            <li className="mb-2">
                                <p className="cursor-pointer" onClick={() => { scrollToRef(refs.aboutRef) }}>About Me</p>

                            </li>
                            <li className="mb-2">
                                <p className="cursor-pointer" onClick={() => { scrollToRef(refs.skillsRef) }}>Skills</p>

                            </li>
                            <li>
                                <p className="cursor-pointer" onClick={() => {
                                    scrollToRef(refs.projectsRef)
                                }}>Projects</p>
                            </li>
                        </ul>
                    </div>
                    <div className="xl:w-1/4 lg:w-1/4 md:w-1/2 mb-6">
                        <h5 className="uppercase font-bold mb-2.5">Resources</h5>
                        <ul className="list-none footer-links">
                            <li className="mb-2">
                                <a href="#" className="hover:underline">FAQ</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Help Center</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Support</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="xl:w-1/4 lg:w-1/4 md:w-1/2 mb-6">
                        <h5 className="uppercase font-bold mb-2.5">Contact Me</h5>
                        <div className="flex items-center space-x-4">
                            <Link href='https://github.com/amanda-nethmini' rel="noopener noreferrer" target="_blank" className='hover:scale-105 transition-all duration-300'>
                                <div className="py-3 text-sm font-semibold text-white flex gap-2">
                                    <Image src={'/Assets/Images/github2.svg'} width={20} height={20} alt="Amanda Nethmini" />
                                    <p>Github</p>
                                </div>
                            </Link>
                            <Link href='https://linkedin.com/in/amanda-nethmini-59897a220' rel="noopener noreferrer" target="_blank" className='hover:scale-105 transition-all duration-300'>
                                <div className="py-3 text-sm font-semibold text-whitemt-5 flex gap-2">
                                    <Image src={'/Assets/Images/linkedin.svg'} width={20} height={20} alt="Amanda Nethmini" />
                                    <p>LinkedIn</p>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="pt-8 mt-8 border-t border-gray-700 text-center">
                    © {new Date().getFullYear()} Developed By @Amanda Nethmini. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
