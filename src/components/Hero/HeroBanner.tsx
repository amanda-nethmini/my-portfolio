import TypingTextEditor from "../TypingText/TypingText";
import Girl from "../Svg/Girl";
import Image from "next/image";

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

export default function HeroBanner({ scrollToRef, refs }: NavbarProps) {
    return (
        <main>
            <section className="flex items-center justify-between px-10 py-20  h-screen ">
                <div className="hidden md:scale-75 md:flex w-2/4  justify-center lg:animate-scaleUp lg:scale-100 transa">
                    <div className="hover:scale-110 transition-all duration-500">
                        <Girl />
                    </div>
                </div>
                <div className="w-full md:w-2/4 space-y-5 animate-fadeInUp">
                    <h1 className="text-6xl font-bold text-gray-800">
                        Hi there, It&apos;s me 👋
                    </h1>
                    <TypingTextEditor text="<Amanda Nethmini/>" typingSpeed={150} />
                    <p className="text-xl text-gray-700">
                        I&apos;m a passionate <span className="font-semibold">Developer/Designer</span> based in Sri Lanka who loves creating modern and resilient web applications.
                    </p>
                    {/* <button onClick={() => { scrollToRef(refs.contactRef) }}>
                        <p className="px-6 py-3 text-sm font-semibold text-white bg-blue-500 rounded-md mt-5 inline-block">
                            Say Hello 👋
                        </p>
                    </button> */}

                    <button onClick={() => { scrollToRef(refs.contactRef) }} className='hover:scale-105 transition-all duration-300 '>
                        <div className="px-6 py-3 text-sm font-semibold hover:shadow-sm text-white bg-gradient-to-r from-[#D25FC3] to-blue-500 rounded-md mt-5 flex gap-2">
                            <p> Say Hello</p> <Image src={'/Assets/Images/waving.svg'} width={20} height={20} alt="Amanda Nethmini" />

                        </div>
                    </button>
                </div>
            </section>
        </main>
    );
}
