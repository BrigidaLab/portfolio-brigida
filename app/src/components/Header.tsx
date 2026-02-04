import React from 'react';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {

    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const transitionConfig = {
        duration: 0.7,
        ease: "easeInOut" as const
    };

    return (
        // Wrapper fixo que centraliza horizontalmente
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <motion.header
                initial="top"
                animate={isScrolled ? "scrolled" : "top"}
                variants={{
                    top: {
                        marginTop: 0,
                        width: "100%",
                        maxWidth: "100vw",
                        borderRadius: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0)",
                        backdropFilter: "blur(0px)",
                        boxShadow: "none",
                        padding: "24px 32px",
                        gap: "120px",
                    },
                    scrolled: {
                        marginTop: 24,
                        width: "fit-content",
                        maxWidth: "100vw",
                        borderRadius: "9999px",
                        backgroundColor: "rgba(254, 254, 250, 0.9)",
                        backdropFilter: "blur(12px)",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                        padding: "12px 50px",
                        gap: "0px",
                        minWidth: "320px",
                    }
                }}
                transition={transitionConfig}
                className="flex items-center justify-between pointer-events-auto w-full"
            >
                {/* Logo 'Brigis' */}
                <motion.div className="flex items-center">
                    <motion.span
                        className="font-bold font-sans"
                        animate={{
                            fontSize: isScrolled ? "20px" : "35px",
                        }}
                        transition={transitionConfig}
                    >
                        Brigis
                    </motion.span>
                </motion.div>

                {/* Menu Hamburger */}
                <motion.div className="cursor-pointer p-1">
                    <motion.svg
                        viewBox="0 0 79 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        animate={{ width: isScrolled ? 35 : 50 }}
                        transition={transitionConfig}
                        className="h-auto text-[#1d1d1d]"
                    >
                        <path d="M 2 2 L 76.552 2" stroke="currentColor" strokeWidth="3.24" strokeMiterlimit="10" />
                        <path d="M 2 22.5 L 76.552 22.5" stroke="currentColor" strokeWidth="3.24" strokeMiterlimit="10" />
                        <path d="M 27.931 12.155 L 76.552 12.155" stroke="currentColor" strokeWidth="3.24" strokeMiterlimit="10" />
                    </motion.svg>
                </motion.div>
            </motion.header>
        </div>
    );
};
