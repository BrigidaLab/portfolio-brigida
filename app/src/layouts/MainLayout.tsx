import React from 'react';
import { ReactLenis } from 'lenis/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface MainLayoutProps {
    children: React.ReactNode;
}

import { CustomCursor } from '../components/CustomCursor';

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <ReactLenis root>
            <CustomCursor />
            <div className="flex flex-col min-h-screen bg-background text-text antialiased selection:bg-[#61E88A] selection:text-black">
                <Header />
                <main className="flex-grow relative z-10">
                    {children}
                </main>
                <Footer />
            </div>
        </ReactLenis>
    );
};
