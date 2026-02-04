import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterTitleProps {
    text: string;
    className?: string;
}

export const TypewriterTitle: React.FC<TypewriterTitleProps> = ({ text, className = "" }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        // Se o texto mudou, começa a apagar o atual
        if (text !== displayedText && !isDeleting) {
            // Se já tem algo escrito, apaga primeiro. Se não, escreve direto.
            if (displayedText.length > 0 && !displayedText.startsWith(text.substring(0, 1))) {
                setIsDeleting(true);
            } else if (displayedText.length === 0) {
                setIsDeleting(false);
            }
        }

        if (isDeleting) {
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(prev => prev.slice(0, -1));
                }, 30); // Velocidade de apagar
            } else {
                setIsDeleting(false);
            }
        } else {
            // Escrevendo
            if (displayedText !== text) {
                timeout = setTimeout(() => {
                    setDisplayedText(text.slice(0, displayedText.length + 1));
                }, 50); // Velocidade de escrever
            }
        }

        return () => clearTimeout(timeout);
    }, [text, displayedText, isDeleting]);

    // Simple override logic: When 'text' prop changes, we manually trigger a reset if needed
    // But the effect above handles typing. For simpler "Replace" logic:

    // Vamos simplificar para garantir o efeito visual exato do pedido:
    // Texto novo entra digitando.

    return (
        <div className={`relative inline-block ${className}`}>
            <motion.span
                className="relative z-10 font-mono font-bold text-[#1d1d1d] uppercase tracking-wider"
            >
                {displayedText}
            </motion.span>

            {/* Highlight Verde que cresce com o texto */}
            <motion.div
                className="absolute inset-y-0 left-0 bg-[#61E88A] -z-0"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0 }}
                style={{ width: '100%' }} // O highlight acompanha o container inline-block do texto
            />

            {/* Cursor Piscando */}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="absolute -right-3 top-0 h-full w-[3px] bg-black"
            />
        </div>
    );
};
