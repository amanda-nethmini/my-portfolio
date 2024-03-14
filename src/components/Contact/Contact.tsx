'use client'
import Image from 'next/image';
import TypingTextEditor from '../TypingText/TypingText';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formAction = 'https://formsubmit.co/vihangajanith99@gmail.com';
        try {
            const response = await fetch(formAction, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,

                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', message: '' })
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error', error);
        }
    };

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className='px-4 md:px-14 py-10  min-h-screen flex items-center'>
            <div className='mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition-all  w-full' style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.5s ease-out, transform 0.5s ease-out' }}>
                <div className='flex justify-center items-center pt-8'>
                    <TypingTextEditor text="<Contact Me />" typingSpeed={100} />
                </div>
                <div className="flex flex-wrap md:flex-nowrap  ">
                    <div className="md:w-1/2  hidden md:flex justify-center items-center">
                        <Image src='/Assets/Images/contact.png' alt="Contact Me" width={500} height={500} />
                    </div>
                    <div className="md:w-1/2 w-full p-8">
                        <form className="space-y-4" action="https://formsubmit.co/anethmini.h@gmail.com" method="POST">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition ease-in-out text-gray-700" value={formData.name} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input type="email" id="email" name="email" placeholder="Your email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition ease-in-out text-gray-700" value={formData.email} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea id="message" name="message" placeholder="Your message" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition ease-in-out text-gray-700" rows={4} value={formData.message} onChange={handleChange}></textarea>
                            </div>
                            <button type="submit" className="px-6 py-3 text-sm font-semibold text-white bg-blue-500 rounded-md mt-5 inline-block">
                                Send Message 😎
                            </button>
                            {isSubmitted && <div className="text-green-500 mt-3">Your message has been sent successfully!</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
