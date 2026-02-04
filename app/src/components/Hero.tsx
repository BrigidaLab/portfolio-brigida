import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import heroImage from '../assets/hero-image.png';

export const Hero: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();

    // Parallax logic
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const yText = useTransform(scrollY, [0, 300], [0, -50]);

    // Mouse parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const moveX = clientX - window.innerWidth / 2;
        const moveY = clientY - window.innerHeight / 2;
        mouseX.set(moveX);
        mouseY.set(moveY);
    };

    const springConfig = { damping: 30, stiffness: 200 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const moveImageX = useTransform(springX, [-1000, 1000], [-15, 15]);
    const moveImageY = useTransform(springY, [-1000, 1000], [-15, 15]);

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-[100dvh] min-h-[800px] bg-[#fdfdfd] overflow-hidden flex items-center justify-center selection:bg-black selection:text-white"
        >
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0 mix-blend-multiply"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}>
            </div>

            {/* Background Big Text "Digital" - Watermark style */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none w-full text-center">
                <h1 className="text-[28vw] leading-none font-serif italic text-[#e5e5e5] opacity-50 blur-sm transform -rotate-2">
                    Digital
                </h1>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-[1400px] px-6 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-center lg:gap-0 pb-24 lg:pb-0">

                {/* Left Side: Name + Role */}
                <motion.div
                    style={{ y: yText }}
                    className="flex flex-col items-center lg:items-start relative z-30 order-2 lg:order-1 mt-10 lg:mt-0"
                >
                    <div className="flex flex-col lg:block items-center lg:pb-4 p-1">
                        <motion.h1
                            data-cursor="text"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className="text-[15.5vw] lg:text-[9vw] leading-[0.9] font-medium tracking-tighter text-[#1d1d1d] uppercase relative z-10 selection:bg-[#61E88A] selection:text-black hover:cursor-none"
                        >
                            Brígida
                        </motion.h1>
                        <motion.h1
                            data-cursor="text"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: "circOut" }}
                            className="text-[15.5vw] lg:text-[9vw] leading-[0.9] font-medium tracking-tighter text-[#1d1d1d] uppercase lg:ml-[0.8em] relative z-10 selection:bg-[#61E88A] selection:text-black hover:cursor-none"
                        >
                            Bastos
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-8 lg:ml-2 flex items-center gap-4"
                    >
                        <div className="h-[2px] w-12 bg-[#61E88A]"></div>
                        <span className="text-xl font-serif italic text-black">Product Designer</span>
                    </motion.div>
                </motion.div>

                {/* Right/Center Side: Image */}
                <motion.div
                    style={{ x: moveImageX, y: moveImageY }}
                    className="relative w-[70vw] h-[55vh] lg:w-[32vw] lg:h-[70vh] z-20 order-1 lg:order-2 lg:-ml-[6vw] mt-36 lg:mt-0"
                >
                    <motion.div
                        initial={{ scale: 1.1, clipPath: 'inset(100% 0 0 0)' }}
                        animate={{ scale: 1, clipPath: 'inset(0% 0 0 0)' }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full h-full relative shadow-2xl"
                    >
                        <img
                            src={heroImage}
                            alt="Editorial Portrait"
                            className="w-full h-full object-cover grayscale contrast-125 select-none pointer-events-none"
                        />
                        {/* Image Border/Frame */}
                        <div className="absolute inset-0 border-[1px] border-white/20"></div>
                    </motion.div>



                    {/* Floating Caption on Image */}
                    <motion.div
                        style={{ y: y1 }}
                        className="absolute -bottom-8 -left-8 bg-white p-6 max-w-[240px] shadow-xl hidden lg:block z-40 border border-gray-100"
                    >
                        <p className="text-sm text-gray-800 leading-relaxed font-sans">
                            "Transformando dados complexos em experiências humanas."
                        </p>
                    </motion.div>
                </motion.div>

            </div>

            {/* Top Status */}
            <div className="absolute top-28 min-[550px]:top-11 w-full px-8 flex justify-center items-center z-50 text-black">
                <div className="inline-flex items-center gap-2">
                    <motion.span
                        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-2 h-2 rounded-full bg-green-500"
                    />
                    <span className="text-xs uppercase tracking-widest font-bold opacity-70">Disponível para projetos</span>
                </div>
            </div>

            {/* Marquee Effect (Imported from Brutalist, adapted for Kinetic) */}
            <div className="absolute bottom-1 min-[550px]:bottom-4 left-0 w-full overflow-hidden whitespace-nowrap z-[5] pointer-events-none opacity-[0.3]">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                    className="text-[4vh] lg:text-[8vh] font-bold uppercase tracking-widest text-transparent will-change-transform"
                    style={{ WebkitTextStroke: "1px #000" }}
                >
                    User Experience • Interface Design • Product Strategy • User Experience • Interface Design • Product Strategy
                </motion.div>
            </div>

        </section>
    );
};
