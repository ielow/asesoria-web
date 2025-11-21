'use client';

import { Spinner, Image } from 'grommet';

export default function LoadingScreen() {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 9999,
                backgroundColor: '#3a3a3a',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 0,
                padding: 0,
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                <Spinner size="medium" color="#7C3AED" />
            </div>
        </div>
    );
}
