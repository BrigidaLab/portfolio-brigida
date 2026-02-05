import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projectData';
import { TypewriterTitle } from './TypewriterTitle';

export const ProjectGallery: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Altura total ajustada para dar tempo de scroll
    const SCROLL_HEIGHT = `${(projects.length + 1) * 40}vh`;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Mapeamento de scroll para índice
    const activeProjectIndex = useTransform(
        scrollYProgress,
        [0, 0.9], // Deixa um buffer no final para sair limpo
        [0, projects.length - 1]
    );

    useMotionValueEvent(activeProjectIndex, "change", (latest) => {
        const newIndex = Math.round(latest);
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < projects.length) {
            setActiveIndex(newIndex);
        }
    });

    const activeProject = projects[activeIndex];

    // Lógica para contar projetos na categoria atual
    const categoryProjects = projects.filter(p => p.category === activeProject.category);
    const categoryCount = categoryProjects.length;

    return (
        <section
            ref={containerRef}
            className="relative font-sans bg-[#fdfdfd]"
            style={{ height: SCROLL_HEIGHT }}
        >
            <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col p-6 sm:p-12 sm:pb-24 xl:p-16">

                {/* 1. Container de Títulos (Alinhado com Hero) */}
                <div className="relative sm:absolute top-0 w-full max-w-[1400px] sm:left-1/2 sm:-translate-x-1/2 px-0 sm:px-6 h-auto sm:h-full pointer-events-none z-20">
                    <div className="relative w-full h-auto sm:h-full flex flex-col justify-start sm:justify-between pt-[80px] sm:pt-[10vh] 2xl:pt-[120px] pb-0 sm:pb-24 2xl:pb-16">

                        {/* Topo: Títulos */}
                        <div>
                            {/* Título Fixo */}
                            <div className="mix-blend-difference">
                                <h1 className="text-[12vw] max-[640px]:landscape:text-[8vh] sm:text-[50px] lg:text-[70px] xl:text-[80px] 2xl:text-[115px] leading-[0.9] lg:leading-[106%] tracking-tighter font-medium text-[#1d1d1d] uppercase">
                                    SELECIONE<br />O PROJETO
                                </h1>
                            </div>

                            {/* Cabeçalho da Categoria */}
                            <div className="mt-6 2xl:mt-12 flex items-center gap-4 pl-1">
                                <div className="relative">
                                    <TypewriterTitle
                                        key={activeProject.category}
                                        text={activeProject.category}
                                        className="text-2xl lg:text-3xl xl:text-4xl bg-[#61E88A]/0"
                                    />
                                </div>
                                <div className="w-8 h-8 rounded-full bg-[#61E88A] flex items-center justify-center">
                                    <span className="text-sm font-bold text-black font-mono">
                                        {categoryCount}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Fundo: Info do Projeto (Desktop/Tablet) */}
                        <div className="relative z-30 pl-1 hidden sm:block">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeProject.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h2 className="text-2xl lg:text-3xl font-bold uppercase tracking-tight mb-4">
                                        {activeProject.title}
                                    </h2>

                                    <div className="flex gap-4 max-w-sm lg:max-w-xl text-sm lg:text-base text-gray-600 leading-relaxed border-l-2 border-black/10 pl-4">
                                        <p>{activeProject.description}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </div>

                {/* 2. Área Central (Cards Stack) - Empurrada para direita/baixo */}
                <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-end relative z-10 w-full mt-[70px] sm:mt-0 lg:pr-[2vw] 2xl:pr-[5vw]">
                    <div className="relative w-full max-w-full sm:pr-0 sm:max-w-[70%] md:max-w-[65%] lg:max-w-[60%] xl:max-w-xl 2xl:max-w-3xl aspect-video sm:mr-12">

                        {/* Decor de Fundo (Pilha) */}
                        <div className="absolute top-4 left-4 w-full h-full bg-[#FFE55C] rounded-none z-0 rotate-1 shadow-sm border border-black/5" />
                        <div className="absolute top-2 left-2 w-full h-full bg-[#9DF8FF] rounded-none z-10 -rotate-1 shadow-sm border border-black/5" />

                        {/* Card Ativo */}
                        <AnimatePresence mode="popLayout" custom={scrollYProgress.getPrevious()! < scrollYProgress.get() ? 1 : -1}>
                            <motion.div
                                key={activeProject.id}
                                custom={scrollYProgress.getPrevious()! < scrollYProgress.get() ? 1 : -1}
                                variants={{
                                    enter: (direction: number) => ({
                                        y: direction > 0 ? -100 : 100,
                                        opacity: 0,
                                        scale: 0.95
                                    }),
                                    center: {
                                        y: 0,
                                        opacity: 1,
                                        scale: 1,
                                        zIndex: 20
                                    },
                                    exit: (direction: number) => ({
                                        y: direction > 0 ? 100 : -100,
                                        opacity: 0,
                                        scale: 0.95,
                                        zIndex: 0
                                    })
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.16, 1, 0.3, 1]
                                    // Cubic bezier suave
                                }}
                                className="absolute inset-0 w-full h-full bg-[#FFADAD] shadow-2xl z-20 overflow-hidden"
                            >
                                <img
                                    src={activeProject.image}
                                    alt={activeProject.title}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Info do Projeto (Mobile Only) */}
                    <div className="sm:hidden mt-[40px] w-full z-30 pl-1 relative pr-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">
                                    {activeProject.title}
                                </h2>

                                <div className="flex gap-4 max-w-xl text-sm text-gray-600 leading-relaxed border-l-2 border-black/10 pl-4">
                                    <p>{activeProject.description}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Paginação Mobile (Ao lado do texto) */}
                        <div className="absolute right-2 top-0 h-full flex flex-col justify-start pt-2 gap-3">
                            {projects.map((proj, idx) => (
                                <motion.div
                                    key={proj.id}
                                    animate={{
                                        scale: activeIndex === idx ? 1.5 : 1,
                                        opacity: activeIndex === idx ? 1 : 0.4,
                                        backgroundColor: activeIndex === idx ? "#000000" : "#5e5f5fff"
                                    }}
                                    className="w-1.5 h-1.5 rounded-full"
                                    transition={{ duration: 0.3 }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* 3. Paginação Vertical (Dots - Desktop/Tablet Only) */}
                    <div className="hidden sm:flex absolute right-0 lg:-right-8 top-1/2 -translate-y-1/2 flex-col gap-3 z-30 mr-2 lg:mr-0">
                        {projects.map((proj, idx) => (
                            <motion.div
                                key={proj.id}
                                animate={{
                                    scale: activeIndex === idx ? 1.5 : 1,
                                    opacity: activeIndex === idx ? 1 : 0.4,
                                    backgroundColor: activeIndex === idx ? "#000000" : "#5e5f5fff"
                                }}
                                className="w-1.5 h-1.5 rounded-full"
                                transition={{ duration: 0.3 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};
