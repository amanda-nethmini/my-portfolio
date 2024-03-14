'use client'
import React, { useState, useEffect } from 'react';

interface TypingTextEditorProps {
    text: string;
    typingSpeed?: number;
    pauseSpeed?: number;
}

const TypingTextEditor: React.FC<TypingTextEditorProps> = ({
    text,
    typingSpeed = 100,
    pauseSpeed = 3000,
}) => {
    const [displayedText, setDisplayedText] = useState<string>('');
    const [isCursorVisible, setIsCursorVisible] = useState<boolean>(true);
    const [typingComplete, setTypingComplete] = useState<boolean>(false);

    useEffect(() => {
        let typingEffect: NodeJS.Timeout;
        if (!typingComplete) {
            typingEffect = setTimeout(() => {
                if (displayedText.length < text.length) {
                    setDisplayedText(text.substring(0, displayedText.length + 1));
                } else {
                    setTypingComplete(true);
                }
            }, typingSpeed);
        } else {
            const resetEffect = setTimeout(() => {
                setDisplayedText('');
                setTypingComplete(false);
            }, pauseSpeed);
            return () => clearTimeout(resetEffect);
        }
        return () => clearTimeout(typingEffect);
    }, [displayedText, text, typingSpeed, typingComplete, pauseSpeed]);

    useEffect(() => {
        const cursorBlink = setInterval(() => {
            setIsCursorVisible((visible) => !visible);
        }, 500);
        return () => clearInterval(cursorBlink);
    }, []);

    return (
        <div className='text-editor' >
            <p className=" text-3xl md:text-6xl font-semibold heading py-3">{displayedText}{isCursorVisible ? '_' : ' '}</p>
        </div>
    );
};

export default TypingTextEditor;
