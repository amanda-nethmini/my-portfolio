import Image from 'next/image';
import TypingTextEditor from '../TypingText/TypingText';
import Link from 'next/link';

export default function About() {
    return (
        <div className=" px-10 ">
            <div className='flex justify-center items-center'>
                <TypingTextEditor text="<About Me/>" typingSpeed={100} />
            </div>
            <section className="md:py-20">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row ">
                        <div className="md:w-1/2 md:pl-10 mt-10 md:mt-0">
                            <h1 className="text-3xl font-bold text-blue-950">Software Engineer & Web Developer</h1>
                            <p className="mt-5 text-lg text-gray-600">Hello, I&apos;m Amanda Nethmini.
                            </p>
                            <p className="mt-5 text-lg text-gray-600">
                                I&apos;m 24 years old and I&apos;m a fresh graduate from Sri Lanka Institute of Information Technology (SLIIT).
                                I&apos;m a Software Engineer and Web Developer based in Colombo, Sri Lanka.
                            </p>
                            <p className="mt-5 text-lg text-gray-600">
                                I&apos;m a passionate Developer/Designer dedicated to building and optimizing the performance of user-centric,
                                high-impact websites for nationwide and global companies.
                                I leverage analytical skills and strong attention to detail in order to deliver original and efficient web solutions,
                                provide technical knowledge and expertise, and develop and implement projects from concept to completion.</p>
                            <div className='flex gap-3 flex-wrap mt-5'>
                                <Link href='https://drive.google.com/file/d/1byamalRKEd2FcEDGdMLf3o60GPiQjj80/view?usp=sharing' rel="noopener noreferrer"
                                    target="_blank" className='hover:scale-105 transition-all duration-300 flex justify-center items-center'>
                                    <div className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#D25FC3] to-blue-500 rounded-md flex gap-2">
                                        <Image src={'/Assets/Images/file-text.svg'} width={20} height={20} alt="Amanda Nethmini" />
                                        <p>Download My CV</p>
                                    </div>
                                </Link>
                                <Link href='https://github.com/amanda-nethmini' rel="noopener noreferrer" target="_blank" className='hover:scale-105 transition-all duration-300 flex justify-center items-center'>
                                    <div className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#D25FC3] to-blue-500 rounded-md flex gap-2">
                                        <Image src={'/Assets/Images/github2.svg'} width={20} height={20} alt="Amanda Nethmini" />
                                        <p>Github</p>
                                    </div>
                                </Link>
                                <Link href='https://linkedin.com/in/amanda-nethmini-59897a220' rel="noopener noreferrer" target="_blank" className='hover:scale-105 transition-all duration-300 flex justify-center items-center'>
                                    <div className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#D25FC3] to-blue-500 rounded-md flex gap-2">
                                        <Image src={'/Assets/Images/linkedin.svg'} width={20} height={20} alt="Amanda Nethmini" />
                                        <p>LinkedIn</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:w-1/2 md:flex justify-center">
                            <div className='hover:scale-110 transition-all duration-300'>
                                <Image src="/Assets/Images/Frame3.png" alt="Amanda Nethmini" width={450} height={450} className="rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
