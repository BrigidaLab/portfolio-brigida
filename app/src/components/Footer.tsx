import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full py-8 text-center border-t border-gray-100 mt-20">
            <div className="flex flex-col items-center space-y-2">
                <p className="text-sm text-gray-400 font-light">
                    © {new Date().getFullYear()} Brígida Gama. Todos os direitos reservados.
                </p>
                <p className="text-xs text-gray-300">
                    Design original por Framer · Reconstruído com React
                </p>
            </div>
        </footer>
    );
};
