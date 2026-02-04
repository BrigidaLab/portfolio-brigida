import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../data/projectData';

interface GallerySlideProps {
    project: Project;
    isActive: boolean;
}

export const GallerySlide: React.FC<GallerySlideProps> = ({ project }) => {
    return (
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center pointer-events-none px-6">

            {/* 1. Category Title (Top) */}
            <motion.div
                className="absolute top-[10vh] text-center overflow-hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <span className="text-sm uppercase tracking-widest font-semibold text-gray-400">
                    {project.category}
                </span>
            </motion.div>

            {/* 2. Main Card (Center) - The "Hero" of the slide */}
            <motion.div
                className="relative w-full max-w-4xl aspect-video md:aspect-[21/9] bg-gray-200 overflow-hidden shadow-2xl origin-center"
                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }} // Blur on exit for depth
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Image Placeholder */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />

                {/* Overlay Gradient (Optional) */}
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
            </motion.div>

            {/* 3. Project Details (Bottom) */}
            <motion.div
                className="absolute bottom-[12vh] md:bottom-[10vh] flex flex-col items-center text-center gap-2 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
                <div className="flex items-center gap-4 mb-2">
                    <span className="h-[1px] w-8 bg-black/20"></span>
                    <span className="text-xs font-mono text-gray-500">{project.year}</span>
                    <span className="h-[1px] w-8 bg-black/20"></span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#1d1d1d]">
                    {project.title}
                </h2>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-2">
                    {project.description}
                </p>
            </motion.div>

        </div>
    );
};
