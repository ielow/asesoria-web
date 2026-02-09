'use client';

import { Box, Anchor } from 'grommet';
import { WhatsApp } from 'grommet-icons';
import { useEffect, useState } from 'react';

export default function WhatsAppButton() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <Box
            className="whatsapp-float-container"
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                zIndex: 5000,
            }}
        >
            <Anchor
                href="https://wa.me/528719282953?text=Hola,%20me%20gustaría%20más%20información%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#25D366',
                    borderRadius: '50%',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    transition: 'all 0.3s ease',
                }}
            >
                <WhatsApp size="32px" color="white" />
            </Anchor>
        </Box>
    );
}
