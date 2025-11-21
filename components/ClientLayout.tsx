'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a small delay to ensure styles are applied or just wait for mount
        // You can adjust the timeout as needed, or remove it if just mounting is enough.
        // A small timeout helps prevent the "flash" even if React hydrates quickly.
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500); // 500ms delay

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading && <LoadingScreen />}
            <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}>
                {children}
            </div>
        </>
    );
}
