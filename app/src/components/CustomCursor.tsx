import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [isHoveringText, setIsHoveringText] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            // Direct mapping -> ZERO LAG
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            const target = e.target as HTMLElement;
            // Check specifically for elements we marked
            const isText = target.closest('[data-cursor="text"]');
            setIsHoveringText(!!isText);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            style={{
                x: mouseX,
                y: mouseY,
                translateX: "-50%",
                translateY: "-50%",
            }}
            // transition-all duration-200 handle only the SHAPE change (width/height), not movement. 
            // Movement is instant via framer motion values.
            className={`fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center transition-all duration-200 ease-out ${isHoveringText
                ? 'w-[4px] h-[9vw] bg-[#14B8A6] opacity-100' // ACTIVE: Teal Bar
                : 'w-0 h-0 opacity-0' // DEFAULT: Hidden
                }`}
        >
        </motion.div>
    );
};
